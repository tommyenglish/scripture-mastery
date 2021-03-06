'use strict';

/* Controllers */

angular.module('scriptureMasteryApp.controllers', [])
  .controller('MainGameCtrl', ['$scope', '$interval', '$timeout', '$routeParams', '$location', 'userFactory', 'masteryFactory', function($scope, $interval, $timeout, $routeParams, $location, userFactory, masteryFactory) {
  	var currentlySelectedPiece, displayWordTimer, scriptureSet = $routeParams.scripture_set, scriptureIndex = $routeParams.scripture_index, 
    dangUrl = '/dang/' + scriptureSet + '/' + scriptureIndex, user = userFactory.getUser(), mastery = masteryFactory.getMasteryScriptures();

  	$scope.userAnswer = '';
  	$scope.lockdownAnswerBox = true;
  	
    if(scriptureSet === 'bom') {
      $scope.scripture = mastery.bom.scriptures[scriptureIndex];
    }
    else if(scriptureSet === 'ot') {
      $scope.scripture = mastery.ot.scriptures[scriptureIndex];
    }
    else if(scriptureSet === 'nt') {
      $scope.scripture = mastery.nt.scriptures[scriptureIndex];
    }
    else if(scriptureSet === 'dc') {
      $scope.scripture = mastery.dc.scriptures[scriptureIndex];
    }

  	if(!$scope.scripture) {
      $location.path('/master-scriptures');
    }

  	$scope.game = function() {
  		var game = {
  			levelType: 1,
  			hearts: 3,
  			powerups: {
  				heartRecovery: {
  					setItOff: function() {
  						if(user.powerups.heartRecovery.tries > 0 && game.hearts < 3) {
  							user.powerups.heartRecovery.tries -= 1;
  							game.hearts += 1;
  						}
  					}
  				},
				freebie: {
  					setItOff: function() {
  						if(user.powerups.freebie.tries > 0 && currentlySelectedPiece) {
  							user.powerups.freebie.tries -= 1;
							$scope.lockdownAnswerBox = true;
  							$scope.userAnswer = '';
  							currentlySelectedPiece.isAnsweredCorrectly = true;
  							spellItOut();
  						}
  					}
  				},
  				flash: {
  					setItOff: function() {
  						if(user.powerups.flash.tries > 0 && currentlySelectedPiece) {
  							var displayValue, duration = 200 - (50 * (game.levelType - 1));

  							user.powerups.flash.tries -= 1;
  							document.getElementById('answerBox').focus();
  							displayValue = currentlySelectedPiece.display;
  							currentlySelectedPiece.display = currentlySelectedPiece.answerKey;
  							$timeout(function() { currentlySelectedPiece.display = displayValue; }, duration);
  						}
  					}
  				}
  			}
  		};

  		return game;
  	}();

  	// put some functions on $scope
  	$scope.selectPiece = selectPiece;
  	$scope.checkAnswer = checkAnswer;
  	$scope.showNextLetter = showNextLetter;
  	$scope.toggleSound = SM_AUDIO_MODULE.toggleSound;
    $scope.powerups = user.powerups;


  	// let's get it started
  	loadLevel(50, 5, $scope.game.levelType);

  	// helper functions
  	function loadLevel(percentToJumble, minimunToJumble, levelType) {
  		$scope.scripture.generatedPieces = SM_JUMBLE_MODULE.createPuzzle($scope.scripture.text, percentToJumble, minimunToJumble, levelType);
  		selectFirstPiece();
  	}
  	function selectPiece(index) {
  		var newlySelectedPiece = $scope.scripture.generatedPieces[index];
  		// if already selected, we're done. if it's already answered, stay on the current one.
  		if(!newlySelectedPiece.isJumbledPiece || newlySelectedPiece.isSelected || newlySelectedPiece.isAnsweredCorrectly || newlySelectedPiece.isAnsweredIncorrectly) {
  			$timeout(function() { document.getElementById('answerBox').focus(); }, 100);
  			return;
  		}
  		// clear current selection
  		if(currentlySelectedPiece) { currentlySelectedPiece.isSelected = false; }
  		// set the one just clicked
  		newlySelectedPiece.isSelected = true;
  		currentlySelectedPiece = newlySelectedPiece;
  		$scope.userAnswer = '';
  		
  		$scope.lockdownAnswerBox = false;
  		$timeout(function() { document.getElementById('answerBox').focus(); }, 100);
  	}
  	function checkAnswer() {
  		SM_AUDIO_MODULE.play('addLetterSound');	
  		if($scope.userAnswer.length === 3) {
  			$scope.lockdownAnswerBox = true;
  			if($scope.userAnswer.toLowerCase() === currentlySelectedPiece.answerKey.substring(0, 3).toLowerCase()) { // they got it right!
  				currentlySelectedPiece.isAnsweredCorrectly = true;
  				spellItOut();
  			}
  			else { // sigh, they got it wrong
  				currentlySelectedPiece.isAnsweredIncorrectly = true;
				currentlySelectedPiece.display = currentlySelectedPiece.answerKey;
				$scope.game.hearts -= 1;
				checkPuzzleComplete();
  			}
  		}
  	}
  	function selectFirstPiece() {
  		var i, piece, length = $scope.scripture.generatedPieces.length;

  		for(i = 0; i < length; i++) {
  			piece = $scope.scripture.generatedPieces[i];
  			if(piece.isJumbledPiece) {
  				$scope.selectPiece(i);
  				return;
  			}
  		}
  	}
	// Spells out the word after answering right or wrong.
  	function spellItOut() {
		displayWordTimer = $interval(function() {
			showNextLetter();
    	}, 100);
  	}
  	// Show the next letter in the word. If it's all spelled out, stop the time that spells it out. 
  	function showNextLetter() {
  		var answerLength = $scope.userAnswer.length, isComplete = answerLength === currentlySelectedPiece.answerKey.length;

  		if(isComplete) {
  			 $interval.cancel(displayWordTimer);
  			 currentlySelectedPiece.display = currentlySelectedPiece.answerKey;
  			 checkPuzzleComplete();
  		}
  		else {
			$scope.userAnswer = $scope.userAnswer + currentlySelectedPiece.answerKey.charAt(answerLength);  
			SM_AUDIO_MODULE.play('addLetterSound');			
  		}
  	}
	// see if all jumbled items items have been answered. If so, let user know, otherwise jump to the next jumbled piece.
  	function checkPuzzleComplete() {
		if($scope.game.hearts === 0) { // game over
      $timeout(function() { $location.path(dangUrl); }, 1000);
		}
		else if(SM_JUMBLE_MODULE.isPuzzleComplete()) {
      userFactory.updateStars(scriptureSet, scriptureIndex, $scope.game.levelType);

			if($scope.game.levelType < 3) {
				$scope.game.levelType += 1;
				loadLevel(50, 5, $scope.game.levelType);
			}
			else if($scope.game.levelType === 3) {
				$scope.game.levelType += 1;
				loadLevel(100, 5, $scope.game.levelType)
			}	
			else {
				alert('all done');
			}
		}
		else {
			jumpToNextGamePiece();
		}
  	}
  	// Sets currentlySelectedPiece to the next unanswered jumble piece. If it can't find one, just stay on the current one by doing nothing.
  	function jumpToNextGamePiece() {
  		var i, piece, currentIndex = currentlySelectedPiece.index, length = $scope.scripture.generatedPieces.length;

  		for (i = currentIndex + 1; i < length; i++) {
  			piece = $scope.scripture.generatedPieces[i];
  			if(piece.isJumbledPiece && !piece.isAnsweredCorrectly && !piece.isAnsweredIncorrectly) {
  				$scope.selectPiece(i);
  				return;
  			}
  		}

  		for (i = 0; i < currentIndex; i++) {
  			piece = $scope.scripture.generatedPieces[i];
  			if(piece.isJumbledPiece && !piece.isAnsweredCorrectly && !piece.isAnsweredIncorrectly) {
  				$scope.selectPiece(i);
  				return;
  			}
  		}
  	}

  }])
  .controller('LevelSelectCtrl', ['$scope', 'userFactory', 'masteryFactory', function($scope, userFactory, masteryFactory) {
  		$scope.user = userFactory.getUser();
  		$scope.mastery = masteryFactory.getMasteryScriptures();

      $scope.showBomScriptures = true;
      $scope.showOtScriptures = false;
      $scope.showNtScriptures = false;
      $scope.showDcScriptures = false;

      $scope.toggleBomScriptures = function() {
        $scope.showBomScriptures = !$scope.showBomScriptures;
      };
      $scope.toggleOtScriptures = function() {
        $scope.showOtScriptures = !$scope.showOtScriptures;
      };
      $scope.toggleNtScriptures = function() {
        $scope.showNtScriptures = !$scope.showNtScriptures;
      };
      $scope.toggleDcScriptures = function() {
        $scope.showDcScriptures = !$scope.showDcScriptures;
      };

  		$scope.diff = function(scripture) {
    		return scripture.split(' ').length;
    	};
  }])
  .controller('DangCtrl', ['$scope',  '$routeParams', function($scope, $routeParams) {
    var tryAgainUrl = 'master-scriptures/' + $routeParams.scripture_set + '/' + $routeParams.scripture_index;

    $scope.tryAgainUrl = tryAgainUrl;
  }]);