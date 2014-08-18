'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('scriptureMasteryApp.services', [])
	.value('version', '0.1')
	
	.factory('userFactory', function () {
        var user = {
        	coins: 10,
        	levelType: 1,
        	currentScripture: null,
        	mastery: {
        		'bom': [
        			{'index': 0, 'stars': 1},
        			{'index': 1, 'stars': 2},
        			{'index': 2, 'stars': 3},
        			{'index': 3, 'stars': 0},
        			{'index': 4, 'stars': 0},
        			{'index': 5, 'stars': 0},
        			{'index': 6, 'stars': 0},
        			{'index': 7, 'stars': 0},
        			{'index': 8, 'stars': 0},
        			{'index': 9, 'stars': 0},
        			{'index': 10, 'stars': 0},
        			{'index': 11, 'stars': 0},
        			{'index': 12, 'stars': 0},
        			{'index': 13, 'stars': 0},
        			{'index': 14, 'stars': 0},
        			{'index': 15, 'stars': 0},
        			{'index': 16, 'stars': 0},
        			{'index': 17, 'stars': 0},
        			{'index': 18, 'stars': 0},
        			{'index': 19, 'stars': 0},
        			{'index': 20, 'stars': 0},
        			{'index': 21, 'stars': 0},
        			{'index': 22, 'stars': 0},
        			{'index': 23, 'stars': 0},
        			{'index': 24, 'stars': 0}
        		]
        	}
        };

        return {
            //loadUser: function () {
            //	user;
            //},
            getUser: function() {
                return user;
            }
        };
    })

    .factory('masteryFactory', function() {
    	var mastery = {
    		'bom': {
    			'scriptures': [
    				{'index': 0, 'difficulty': 3, 'book': '1 Nephi', 'chapter': 3, 'verse': '7', 'gist': 'I will go and do.', 'text': 'And it came to pass that I, Nephi, said unto my father: I will go and do the things which the Lord hath commanded, for I know that the Lord giveth no commandments unto the children of men, save he shall prepare a way for them that they may accomplish the thing which he commandeth them.' },
    				{'index': 1, 'difficulty': 1, 'book': '2 Nephi', 'chapter': 2, 'verse': '25', 'gist': 'Adam fell that men might be.', 'text': 'Adam fell that men might be; and men are, that they might have joy.' },
    				{'index': 2, 'difficulty': 3, 'book': '2 Nephi', 'chapter': 2, 'verse': '27', 'gist': 'We are free to choose.', 'text': 'Wherefore, men are free according to the flesh; and all things are given them which are expedient unto man. And they are free to choose liberty and eternal life, through the great Mediator of all men, or to choose captivity and death, according to the captivity and power of the devil; for he seeketh that all men might be miserable like unto himself.' },
    				{'index': 3, 'difficulty': 4, 'book': '2 Nephi', 'chapter': 9, 'verse': '28–29', 'gist': 'Learning is good if we follow God’s counsel.', 'text': 'O that cunning plan of the evil one! O the vainness, and the frailties, and the foolishness of men! When they are learned they think they are wise, and they hearken not unto the counsel of God, for they set it aside, supposing they know of themselves, wherefore, their wisdom is foolishness and it profiteth them not. And they shall perish.<br/><br/>But to be learned is good if they hearken unto the counsels of God.' },
    				{'index': 4, 'difficulty': 4, 'book': '2 Nephi', 'chapter': 25, 'verse': '23, 26', 'gist': 'By grace we are saved.', 'text': 'For we labor diligently to write, to persuade our children, and also our brethren, to believe in Christ, and to be reconciled to God; for we know that it is by grace that we are saved, after all we can do.<br/><br/>And we talk of Christ, we rejoice in Christ, we preach of Christ, we prophesy of Christ, and we write according to our prophecies, that our children may know to what source they may look for a remission of their sins.' },
    				{'index': 5, 'difficulty': 5, 'book': '2 Nephi', 'chapter': 28, 'verse': '7-9', 'gist': 'We cannot justify any sin.', 'text': 'Yea, and there shall be many which shall say: Eat, drink, and be merry, for tomorrow we die; and it shall be well with us.<br/><br/>And there shall also be many which shall say: Eat, drink, and be merry; nevertheless, fear God—he will justify in committing a little sin; yea, lie a little, take the advantage of one because of his words, dig a pit for thy neighbor; there is no harm in this; and do all these things, for tomorrow we die; and if it so be that we are guilty, God will beat us with a few stripes, and at last we shall be saved in the kingdom of God.<br/><br/>Yea, and there shall be many which shall teach after this manner, false and vain and foolish doctrines, and shall be puffed up in their hearts, and shall seek deep to hide their counsels from the Lord; and their works shall be in the dark.' },
    				{'index': 6, 'difficulty': 5, 'book': '2 Nephi', 'chapter': 31, 'verse': '19–20', 'gist': 'Endure to the end.', 'text': 'And now, my beloved brethren, after ye have gotten into this strait and narrow path, I would ask if all is done? Behold, I say unto you, Nay; for ye have not come thus far save it were by the word of Christ with unshaken faith in him, relying wholly upon the merits of him who is mighty to save.<br/><br/>Wherefore, ye must press forward with a steadfastness in Christ, having a perfect brightness of hope, and a love of God and of all men. Wherefore, if ye shall press forward, feasting upon the word of Christ, and endure to the end, behold, thus saith the Father: Ye shall have eternal life.' },
    				{'index': 7, 'difficulty': 2, 'book': '2 Nephi', 'chapter': 32, 'verse': '3', 'gist': 'Feast on the words of Christ.', 'text': 'Angels speak by the power of the Holy Ghost; wherefore, they speak the words of Christ. Wherefore, I said unto you, feast upon the words of Christ; for behold, the words of Christ will tell you all things what ye should do.' },
    				{'index': 8, 'difficulty': 5, 'book': '2 Nephi', 'chapter': 32, 'verse': '8–9', 'gist': 'Ye must pray always.', 'text': 'And now, my beloved brethren, I perceive that ye ponder still in your hearts; and it grieveth me that I must speak concerning this thing. For if ye would hearken unto the Spirit which teacheth a man to pray, ye would know that ye must pray; for the evil spirit teacheth not a man to pray, but teacheth him that he must not pray.<br/><br/>But behold, I say unto you that ye must pray always, and not faint; that ye must not perform any thing unto the Lord save in the first place ye shall pray unto the Father in the name of Christ, that he will consecrate thy performance unto thee, that thy performance may be for the welfare of thy soul.' },
    				{'index': 9, 'difficulty': 2, 'book': 'Mosiah', 'chapter': 2, 'verse': '17', 'gist': 'Serving others serves God.', 'text': 'And behold, I tell you these things that ye may learn wisdom; that ye may learn that when ye are in the service of your fellow beings ye are only in the service of your God.' },
    				{'index': 10, 'difficulty': 4, 'book': 'Mosiah', 'chapter': 3, 'verse': '19', 'gist': 'Natural man is God’s enemy.', 'text': 'For the natural man is an enemy to God, and has been from the fall of Adam, and will be, forever and ever, unless he yields to the enticings of the Holy Spirit, and putteth off the natural man and becometh a saint through the atonement of Christ the Lord, and becometh as a child, submissive, meek, humble, patient, full of love, willing to submit to all things which the Lord seeth fit to inflict upon him, even as a child doth submit to his father.' },
    				{'index': 11, 'difficulty': 3, 'book': 'Mosiah', 'chapter': 4, 'verse': '30', 'gist': 'Watch your thoughts, words, and deeds.', 'text': 'But this much I can tell you, that if ye do not watch yourselves, and your thoughts, and your words, and your deeds, and observe the commandments of God, and continue in the faith of what ye have heard concerning the coming of our Lord, even unto the end of your lives, ye must perish. And now, O man, remember, and perish not.' },
    				{'index': 12, 'difficulty': 5, 'book': 'Alma', 'chapter': 7, 'verse': '11–13', 'gist': 'Jesus Christ overcame sin and death.', 'text': 'And he shall go forth, suffering pains and afflictions and temptations of every kind; and this that the word might be fulfilled which saith he will take upon him the pains and the sicknesses of his people.<br/><br/>And he will take upon him death, that he may loose the bands of death which bind his people; and he will take upon him their infirmities, that his bowels may be filled with mercy, according to the flesh, that he may know according to the flesh how to succor his people according to their infirmities.<br/><br/>Now the Spirit knoweth all things; nevertheless the Son of God suffereth according to the flesh that he might take upon him the sins of his people, that he might blot out their transgressions according to the power of his deliverance; and now behold, this is the testimony which is in me.' },
    				{'index': 13, 'difficulty': 2, 'book': 'Alma', 'chapter': 32, 'verse': '21', 'gist': 'Faith is not a perfect knowledge.', 'text': 'And now as I said concerning faith—faith is not to have a perfect knowledge of things; therefore if ye have faith ye hope for things which are not seen, which are true.' },
    				{'index': 14, 'difficulty': 1, 'book': 'Alma', 'chapter': 37, 'verse': '35', 'gist': 'Learn in thy youth to keep the commandments.', 'text': 'O, remember, my son, and learn wisdom in thy youth; yea, learn in thy youth to keep the commandments of God.' },
    				{'index': 15, 'difficulty': 3, 'book': 'Alma', 'chapter': 39, 'verse': '9', 'gist': 'Go no more after the lust of your eyes.', 'text': 'Now my son, I would that ye should repent and forsake your sins, and go no more after the lusts of your eyes, but cross yourself in all these things; for except ye do this ye can in nowise inherit the kingdom of God. Oh, remember, and take it upon you, and cross yourself in these things.' },
    				{'index': 16, 'difficulty': 2, 'book': 'Alma', 'chapter': 41, 'verse': '10', 'gist': 'Wickedness never was happiness.', 'text': 'Do not suppose, because it has been spoken concerning restoration, that ye shall be restored from sin to happiness. Behold, I say unto you, wickedness never was happiness.' },
    				{'index': 17, 'difficulty': 4, 'book': 'Heleman', 'chapter': 5, 'verse': '12', 'gist': 'Build your foundation on Christ.', 'text': 'And now, my sons, remember, remember that it is upon the rock of our Redeemer, who is Christ, the Son of God, that ye must build your foundation; that when the devil shall send forth his mighty winds, yea, his shafts in the whirlwind, yea, when all his hail and his mighty storm shall beat upon you, it shall have no power over you to drag you down to the gulf of misery and endless wo, because of the rock upon which ye are built, which is a sure foundation, a foundation whereon if men build they cannot fall.' },
    				{'index': 18, 'difficulty': 1, 'book': '3 Nephi', 'chapter': 12, 'verse': '48', 'gist': 'Ye should be perfect.', 'text': 'Therefore I would that ye should be perfect even as I, or your Father who is in heaven is perfect.' },
    				{'index': 19, 'difficulty': 4, 'book': '3 Nephi', 'chapter': 18, 'verse': '15, 20–21', 'gist': 'Watch and pray always.', 'text': 'Verily, verily, I say unto you, ye must watch and pray always, lest ye be tempted by the devil, and ye be led away captive by him.<br/><br/>And whatsoever ye shall ask the Father in my name, which is right, believing that ye shall receive, behold it shall be given unto you.<br/><br/>Pray in your families unto the Father, always in my name, that your wives and your children may be blessed.' },
    				{'index': 20, 'difficulty': 3, 'book': 'Ether', 'chapter': 12, 'verse': '6', 'gist': 'Witness comes after the trial of faith.', 'text': 'And now, I, Moroni, would speak somewhat concerning these things; I would show unto the world that faith is things which are hoped for and not seen; wherefore, dispute not because ye see not, for ye receive no witness until after the trial of your faith.' },
    				{'index': 21, 'difficulty': 3, 'book': 'Ether', 'chapter': 12, 'verse': '27', 'gist': 'Weak things become strong.', 'text': 'And if men come unto me I will show unto them their weakness. I give unto men weakness that they may be humble; and my grace is sufficient for all men that humble themselves before me; for if they humble themselves before me, and have faith in me, then will I make weak things become strong unto them.' },
    				{'index': 22, 'difficulty': 3, 'book': 'Moroni', 'chapter': 7, 'verse': '41', 'gist': 'Have hope through the Atonement of Christ.', 'text': 'And what is it that ye shall hope for? Behold I say unto you that ye shall have hope through the atonement of Christ and the power of his resurrection, to be raised unto life eternal, and this because of your faith in him according to the promise.' },
    				{'index': 23, 'difficulty': 5, 'book': 'Moroni', 'chapter': 7, 'verse': '45, 47–48', 'gist': 'Charity suffereth long.', 'text': 'And charity suffereth long, and is kind, and envieth not, and is not puffed up, seeketh not her own, is not easily provoked, thinketh no evil, and rejoiceth not in iniquity but rejoiceth in the truth, beareth all things, believeth all things, hopeth all things, endureth all things.<br/><br/>But charity is the pure love of Christ, and it endureth forever; and whoso is found possessed of it at the last day, it shall be well with him.<br/><br/>Wherefore, my beloved brethren, pray unto the Father with all the energy of heart, that ye may be filled with this love, which he hath bestowed upon all who are true followers of his Son, Jesus Christ; that ye may become the sons of God; that when he shall appear we shall be like him, for we shall see him as he is; that we may have this hope; that we may be purified even as he is pure. Amen.' },
    				{'index': 24, 'difficulty': 4, 'book': 'Moroni', 'chapter': 10, 'verse': '4–5', 'gist': 'The Holy Ghost reveals truth.', 'text': 'And when ye shall receive these things, I would exhort you that ye would ask God, the Eternal Father, in the name of Christ, if these things are not true; and if ye shall ask with a sincere heart, with real intent, having faith in Christ, he will manifest the truth of it unto you, by the power of the Holy Ghost.<br/><br/>And by the power of the Holy Ghost ye may know the truth of all things.' }
    			]
    		}
    		
    	}

    	return {
            getMasteryScriptures: function() {
                return mastery;
            }
        };
    });