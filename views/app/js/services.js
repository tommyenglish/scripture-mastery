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
        			{'index': 0, 'stars': 0},
        			{'index': 1, 'stars': 0},
        			{'index': 2, 'stars': 0},
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
        		],
                'ot': [
                    {'index': 0, 'stars': 0},
                    {'index': 1, 'stars': 0},
                    {'index': 2, 'stars': 0},
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
                ],
                'nt': [
                    {'index': 0, 'stars': 0},
                    {'index': 1, 'stars': 0},
                    {'index': 2, 'stars': 0},
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
                ],
                'dc': [
                    {'index': 0, 'stars': 0},
                    {'index': 1, 'stars': 0},
                    {'index': 2, 'stars': 0},
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
        	},
            powerups: {
                heartRecovery: {
                    tries: 1
                },
                freebie: {
                    tries: 2
                },
                flash: {
                    tries: 5
                }
            }
        };

        return {
            //loadUser: function () {
            //	user;
            //},
            getUser: function() {
                return user;
            },
            updateStars: function(scriptureSet, scriptureIndex, stars) {
                var currentStars, scriptureToUpdate;

                if(scriptureSet === 'bom') {
                  scriptureToUpdate = user.mastery.bom[scriptureIndex];
                }
                else if(scriptureSet === 'ot') {
                  scriptureToUpdate = user.mastery.ot[scriptureIndex];
                }
                else if(scriptureSet === 'nt') {
                  scriptureToUpdate = user.mastery.nt[scriptureIndex];
                }
                else if(scriptureSet === 'dc') {
                  scriptureToUpdate = user.mastery.dc[scriptureIndex];
                }

                if(scriptureToUpdate) {
                    currentStars = scriptureToUpdate.stars;

                    if(stars > currentStars) {
                        scriptureToUpdate.stars = stars;
                    }
                }
            }
        };
    })

    .factory('masteryFactory', function() {
        /*           
        Diff   Number of words
        1      0-24
        2      25-44
        3      45-64
        4      65-99
        5      100+
        */
    	var mastery = {
    		'bom': {
    			'scriptures': [
    				{'id': 'bom0', 'index': 0, 'difficulty': 3, 'book': '1 Nephi', 'chapter': 3, 'verse': '7', 'gist': 'I will go and do.', 'text': 'And it came to pass that I, Nephi, said unto my father: I will go and do the things which the Lord hath commanded, for I know that the Lord giveth no commandments unto the children of men, save he shall prepare a way for them that they may accomplish the thing which he commandeth them.' },
    				{'id': 'bom1', 'index': 1, 'difficulty': 1, 'book': '2 Nephi', 'chapter': 2, 'verse': '25', 'gist': 'Adam fell that men might be.', 'text': 'Adam fell that men might be; and men are, that they might have joy.' },
                    {'id': 'bom2', 'index': 3, 'difficulty': 4, 'book': '2 Nephi', 'chapter': 9, 'verse': '28–29', 'gist': 'Learning is good if we follow God’s counsel.', 'text': 'O that cunning plan of the evil one! O the vainness, and the frailties, and the foolishness of men! When they are learned they think they are wise, and they hearken not unto the counsel of God, for they set it aside, supposing they know of themselves, wherefore, their wisdom is foolishness and it profiteth them not. And they shall perish.<br/><br/>But to be learned is good if they hearken unto the counsels of God.' },
                    {'id': 'bom3', 'index': 4, 'difficulty': 4, 'book': '2 Nephi', 'chapter': 25, 'verse': '23, 26', 'gist': 'By grace we are saved.', 'text': 'For we labor diligently to write, to persuade our children, and also our brethren, to believe in Christ, and to be reconciled to God; for we know that it is by grace that we are saved, after all we can do.<br/><br/>And we talk of Christ, we rejoice in Christ, we preach of Christ, we prophesy of Christ, and we write according to our prophecies, that our children may know to what source they may look for a remission of their sins.' },
    				{'id': 'bom4', 'index': 2, 'difficulty': 3, 'book': '2 Nephi', 'chapter': 2, 'verse': '27', 'gist': 'We are free to choose.', 'text': 'Wherefore, men are free according to the flesh; and all things are given them which are expedient unto man. And they are free to choose liberty and eternal life, through the great Mediator of all men, or to choose captivity and death, according to the captivity and power of the devil; for he seeketh that all men might be miserable like unto himself.' },
    				{'id': 'bom5', 'index': 5, 'difficulty': 5, 'book': '2 Nephi', 'chapter': 28, 'verse': '7-9', 'gist': 'We cannot justify any sin.', 'text': 'Yea, and there shall be many which shall say: Eat, drink, and be merry, for tomorrow we die; and it shall be well with us.<br/><br/>And there shall also be many which shall say: Eat, drink, and be merry; nevertheless, fear God — he will justify in committing a little sin; yea, lie a little, take the advantage of one because of his words, dig a pit for thy neighbor; there is no harm in this; and do all these things, for tomorrow we die; and if it so be that we are guilty, God will beat us with a few stripes, and at last we shall be saved in the kingdom of God.<br/><br/>Yea, and there shall be many which shall teach after this manner, false and vain and foolish doctrines, and shall be puffed up in their hearts, and shall seek deep to hide their counsels from the Lord; and their works shall be in the dark.' },
    				{'id': 'bom6', 'index': 6, 'difficulty': 5, 'book': '2 Nephi', 'chapter': 31, 'verse': '19–20', 'gist': 'Endure to the end.', 'text': 'And now, my beloved brethren, after ye have gotten into this strait and narrow path, I would ask if all is done? Behold, I say unto you, Nay; for ye have not come thus far save it were by the word of Christ with unshaken faith in him, relying wholly upon the merits of him who is mighty to save.<br/><br/>Wherefore, ye must press forward with a steadfastness in Christ, having a perfect brightness of hope, and a love of God and of all men. Wherefore, if ye shall press forward, feasting upon the word of Christ, and endure to the end, behold, thus saith the Father: Ye shall have eternal life.' },
    				{'id': 'bom7', 'index': 7, 'difficulty': 2, 'book': '2 Nephi', 'chapter': 32, 'verse': '3', 'gist': 'Feast on the words of Christ.', 'text': 'Angels speak by the power of the Holy Ghost; wherefore, they speak the words of Christ. Wherefore, I said unto you, feast upon the words of Christ; for behold, the words of Christ will tell you all things what ye should do.' },
    				{'id': 'bom8', 'index': 8, 'difficulty': 5, 'book': '2 Nephi', 'chapter': 32, 'verse': '8–9', 'gist': 'Ye must pray always.', 'text': 'And now, my beloved brethren, I perceive that ye ponder still in your hearts; and it grieveth me that I must speak concerning this thing. For if ye would hearken unto the Spirit which teacheth a man to pray, ye would know that ye must pray; for the evil spirit teacheth not a man to pray, but teacheth him that he must not pray.<br/><br/>But behold, I say unto you that ye must pray always, and not faint; that ye must not perform any thing unto the Lord save in the first place ye shall pray unto the Father in the name of Christ, that he will consecrate thy performance unto thee, that thy performance may be for the welfare of thy soul.' },
    				{'id': 'bom9', 'index': 9, 'difficulty': 2, 'book': 'Mosiah', 'chapter': 2, 'verse': '17', 'gist': 'Serving others serves God.', 'text': 'And behold, I tell you these things that ye may learn wisdom; that ye may learn that when ye are in the service of your fellow beings ye are only in the service of your God.' },
    				{'id': 'bom10', 'index': 10, 'difficulty': 4, 'book': 'Mosiah', 'chapter': 3, 'verse': '19', 'gist': 'Natural man is God’s enemy.', 'text': 'For the natural man is an enemy to God, and has been from the fall of Adam, and will be, forever and ever, unless he yields to the enticings of the Holy Spirit, and putteth off the natural man and becometh a saint through the atonement of Christ the Lord, and becometh as a child, submissive, meek, humble, patient, full of love, willing to submit to all things which the Lord seeth fit to inflict upon him, even as a child doth submit to his father.' },
    				{'id': 'bom11', 'index': 11, 'difficulty': 3, 'book': 'Mosiah', 'chapter': 4, 'verse': '30', 'gist': 'Watch your thoughts, words, and deeds.', 'text': 'But this much I can tell you, that if ye do not watch yourselves, and your thoughts, and your words, and your deeds, and observe the commandments of God, and continue in the faith of what ye have heard concerning the coming of our Lord, even unto the end of your lives, ye must perish. And now, O man, remember, and perish not.' },
    				{'id': 'bom12', 'index': 12, 'difficulty': 5, 'book': 'Alma', 'chapter': 7, 'verse': '11–13', 'gist': 'Jesus Christ overcame sin and death.', 'text': 'And he shall go forth, suffering pains and afflictions and temptations of every kind; and this that the word might be fulfilled which saith he will take upon him the pains and the sicknesses of his people.<br/><br/>And he will take upon him death, that he may loose the bands of death which bind his people; and he will take upon him their infirmities, that his bowels may be filled with mercy, according to the flesh, that he may know according to the flesh how to succor his people according to their infirmities.<br/><br/>Now the Spirit knoweth all things; nevertheless the Son of God suffereth according to the flesh that he might take upon him the sins of his people, that he might blot out their transgressions according to the power of his deliverance; and now behold, this is the testimony which is in me.' },
    				{'id': 'bom13', 'index': 13, 'difficulty': 2, 'book': 'Alma', 'chapter': 32, 'verse': '21', 'gist': 'Faith is not a perfect knowledge.', 'text': 'And now as I said concerning faith — faith is not to have a perfect knowledge of things; therefore if ye have faith ye hope for things which are not seen, which are true.' },
    				{'id': 'bom14', 'index': 14, 'difficulty': 1, 'book': 'Alma', 'chapter': 37, 'verse': '35', 'gist': 'Learn in thy youth to keep the commandments.', 'text': 'O, remember, my son, and learn wisdom in thy youth; yea, learn in thy youth to keep the commandments of God.' },
    				{'id': 'bom15', 'index': 15, 'difficulty': 3, 'book': 'Alma', 'chapter': 39, 'verse': '9', 'gist': 'Go no more after the lust of your eyes.', 'text': 'Now my son, I would that ye should repent and forsake your sins, and go no more after the lusts of your eyes, but cross yourself in all these things; for except ye do this ye can in nowise inherit the kingdom of God. Oh, remember, and take it upon you, and cross yourself in these things.' },
    				{'id': 'bom16', 'index': 16, 'difficulty': 2, 'book': 'Alma', 'chapter': 41, 'verse': '10', 'gist': 'Wickedness never was happiness.', 'text': 'Do not suppose, because it has been spoken concerning restoration, that ye shall be restored from sin to happiness. Behold, I say unto you, wickedness never was happiness.' },
    				{'id': 'bom17', 'index': 17, 'difficulty': 4, 'book': 'Heleman', 'chapter': 5, 'verse': '12', 'gist': 'Build your foundation on Christ.', 'text': 'And now, my sons, remember, remember that it is upon the rock of our Redeemer, who is Christ, the Son of God, that ye must build your foundation; that when the devil shall send forth his mighty winds, yea, his shafts in the whirlwind, yea, when all his hail and his mighty storm shall beat upon you, it shall have no power over you to drag you down to the gulf of misery and endless wo, because of the rock upon which ye are built, which is a sure foundation, a foundation whereon if men build they cannot fall.' },
    				{'id': 'bom18', 'index': 18, 'difficulty': 1, 'book': '3 Nephi', 'chapter': 12, 'verse': '48', 'gist': 'Ye should be perfect.', 'text': 'Therefore I would that ye should be perfect even as I, or your Father who is in heaven is perfect.' },
    				{'id': 'bom19', 'index': 19, 'difficulty': 4, 'book': '3 Nephi', 'chapter': 18, 'verse': '15, 20–21', 'gist': 'Watch and pray always.', 'text': 'Verily, verily, I say unto you, ye must watch and pray always, lest ye be tempted by the devil, and ye be led away captive by him.<br/><br/>And whatsoever ye shall ask the Father in my name, which is right, believing that ye shall receive, behold it shall be given unto you.<br/><br/>Pray in your families unto the Father, always in my name, that your wives and your children may be blessed.' },
    				{'id': 'bom20', 'index': 20, 'difficulty': 3, 'book': 'Ether', 'chapter': 12, 'verse': '6', 'gist': 'Witness comes after the trial of faith.', 'text': 'And now, I, Moroni, would speak somewhat concerning these things; I would show unto the world that faith is things which are hoped for and not seen; wherefore, dispute not because ye see not, for ye receive no witness until after the trial of your faith.' },
    				{'id': 'bom21', 'index': 21, 'difficulty': 3, 'book': 'Ether', 'chapter': 12, 'verse': '27', 'gist': 'Weak things become strong.', 'text': 'And if men come unto me I will show unto them their weakness. I give unto men weakness that they may be humble; and my grace is sufficient for all men that humble themselves before me; for if they humble themselves before me, and have faith in me, then will I make weak things become strong unto them.' },
    				{'id': 'bom22', 'index': 22, 'difficulty': 3, 'book': 'Moroni', 'chapter': 7, 'verse': '41', 'gist': 'Have hope through the Atonement of Christ.', 'text': 'And what is it that ye shall hope for? Behold I say unto you that ye shall have hope through the atonement of Christ and the power of his resurrection, to be raised unto life eternal, and this because of your faith in him according to the promise.' },
    				{'id': 'bom23', 'index': 23, 'difficulty': 5, 'book': 'Moroni', 'chapter': 7, 'verse': '45, 47–48', 'gist': 'Charity suffereth long.', 'text': 'And charity suffereth long, and is kind, and envieth not, and is not puffed up, seeketh not her own, is not easily provoked, thinketh no evil, and rejoiceth not in iniquity but rejoiceth in the truth, beareth all things, believeth all things, hopeth all things, endureth all things.<br/><br/>But charity is the pure love of Christ, and it endureth forever; and whoso is found possessed of it at the last day, it shall be well with him.<br/><br/>Wherefore, my beloved brethren, pray unto the Father with all the energy of heart, that ye may be filled with this love, which he hath bestowed upon all who are true followers of his Son, Jesus Christ; that ye may become the sons of God; that when he shall appear we shall be like him, for we shall see him as he is; that we may have this hope; that we may be purified even as he is pure. Amen.' },
    				{'id': 'bom24', 'index': 24, 'difficulty': 4, 'book': 'Moroni', 'chapter': 10, 'verse': '4–5', 'gist': 'The Holy Ghost reveals truth.', 'text': 'And when ye shall receive these things, I would exhort you that ye would ask God, the Eternal Father, in the name of Christ, if these things are not true; and if ye shall ask with a sincere heart, with real intent, having faith in Christ, he will manifest the truth of it unto you, by the power of the Holy Ghost.<br/><br/>And by the power of the Holy Ghost ye may know the truth of all things.' }
    			]
    		},
            'ot': {
                'scriptures': [
                    {'id': 'ot0', 'index': 0, 'difficulty': 1, 'book': 'Moses', 'chapter': 1, 'verse': '39', 'gist': 'This is God’s work and glory.', 'text': 'For behold, this is my work and my glory — to bring to pass the immortality and eternal life of man.' },
                    {'id': 'ot1', 'index': 1, 'difficulty': 2, 'book': 'Moses', 'chapter': 7, 'verse': '18', 'gist': 'Zion—one heart and one mind in righteousness', 'text': 'And the Lord called his people Zion, because they were of one heart and one mind, and dwelt in righteousness; and there was no poor among them.' },
                    {'id': 'ot2', 'index': 2, 'difficulty': 4, 'book': 'Abraham', 'chapter': 3, 'verse': '22-23', 'gist': 'Abraham was chosen before he was born.', 'text': 'Now the Lord had shown unto me, Abraham, the intelligences that were organized before the world was; and among all these there were many of the noble and great ones;<br/><br/>And God saw these souls that they were good, and he stood in the midst of them, and he said: These I will make my rulers; for he stood among those that were spirits, and he saw that they were good; and he said unto me: Abraham, thou art one of them; thou wast chosen before thou wast born.' },
                    {'id': 'ot3', 'index': 3, 'difficulty': 4, 'book': 'Genesis', 'chapter': 1, 'verse': '26-27', 'gist': 'God created man in His own image.', 'text': 'And God said, Let us make man in our image, after our likeness: and let them have dominion over the fish of the sea, and over the fowl of the air, and over the cattle, and over all the earth, and over every creeping thing that creepeth upon the earth.<br/><br/>So God created man in his own image, in the image of God created he him; male and female created he them.' },
                    {'id': 'ot4', 'index': 4, 'difficulty': 1, 'book': 'Genesis', 'chapter': 2, 'verse': '24', 'gist': 'Husbands and wives should be one.', 'text': 'Therefore shall a man leave his father and his mother, and shall cleave unto his wife: and they shall be one flesh.' },
                    {'id': 'ot5', 'index': 5, 'difficulty': 2, 'book': 'Genesis', 'chapter': 39, 'verse': '9', 'gist': 'Joseph resisted temptation.', 'text': 'There is none greater in this house than I; neither hath he kept back any thing from me but thee, because thou art his wife: how then can I do this great wickedness, and sin against God?' },
                    {'id': 'ot6', 'index': 6, 'difficulty': 3, 'book': 'Exodus', 'chapter': 19, 'verse': '5-6', 'gist': 'Ye shall be a holy nation.', 'text': 'Now therefore, if ye will obey my voice indeed, and keep my covenant, then ye shall be a peculiar treasure unto me above all people: for all the earth is mine:<br/><br/>And ye shall be unto me a kingdom of priests, and an holy nation. These are the words which thou shalt speak unto the children of Israel.' },
                    {'id': 'ot7', 'index': 7, 'difficulty': 5, 'book': 'Exodus', 'chapter': 20, 'verse': '3-17', 'gist': 'The Ten Commandments', 'text': 'Thou shalt have no other gods before me.<br/><br/>Thou shalt not make unto thee any graven image, or any likeness of any thing that is in heaven above, or that is in the earth beneath, or that is in the water under the earth:<br/><br/>Thou shalt not bow down thyself to them, nor serve them: for I the Lord thy God am a jealous God, visiting the iniquity of the fathers upon the children unto the third and fourth generation of them that hate me;<br/><br/>And shewing mercy unto thousands of them that love me, and keep my commandments.<br/><br/>Thou shalt not take the name of the Lord thy God in vain; for the Lord will not hold him guiltless that taketh his name in vain.<br/><br/>Remember the sabbath day, to keep it holy.<br/><br/>Six days shalt thou labour, and do all thy work:<br/><br/>But the seventh day is the sabbath of the Lord thy God: in it thou shalt not do any work, thou, nor thy son, nor thy daughter, thy manservant, nor thy maidservant, nor thy cattle, nor thy stranger that is within thy gates:<br/><br/>For in six days the Lord made heaven and earth, the sea, and all that in them is, and rested the seventh day: wherefore the Lord blessed the sabbath day, and hallowed it.<br/><br/>Honour thy father and thy mother: that thy days may be long upon the land which the Lord thy God giveth thee.<br/><br/>Thou shalt not kill.<br/><br/>Thou shalt not commit adultery.<br/><br/>Thou shalt not steal.<br/><br/>Thou shalt not bear false witness against thy neighbour.<br/><br/>Thou shalt not covet thy neighbour’s house, thou shalt not covet thy neighbour’s wife, nor his manservant, nor his maidservant, nor his ox, nor his ass, nor any thing that is thy neighbour’s.' },
                    {'id': 'ot8', 'index': 8, 'difficulty': 3, 'book': 'Joshua', 'chapter': 24, 'verse': '15', 'gist': 'Choose to serve the Lord.', 'text': 'And if it seem evil unto you to serve the Lord, choose you this day whom ye will serve; whether the gods which your fathers served that were on the other side of the flood, or the gods of the Amorites, in whose land ye dwell: but as for me and my house, we will serve the Lord.' },
                    {'id': 'ot9', 'index': 9, 'difficulty': 3, 'book': '1 Samuel', 'chapter': 16, 'verse': '7', 'gist': 'The Lord looks on the heart.', 'text': 'But the Lord said unto Samuel, Look not on his countenance, or on the height of his stature; because I have refused him: for the Lord seeth not as man seeth; for man looketh on the outward appearance, but the Lord looketh on the heart.' },
                    {'id': 'ot10', 'index': 10, 'difficulty': 2, 'book': 'Psalm', 'chapter': 24, 'verse': '3-4', 'gist': 'Clean hands, pure heart', 'text': 'Who shall ascend into the hill of the Lord? or who shall stand in his holy place?<br/><br/>He that hath clean hands, and a pure heart; who hath not lifted up his soul unto vanity, nor sworn deceitfully.' },
                    {'id': 'ot11', 'index': 11, 'difficulty': 1, 'book': 'Psalm', 'chapter': 119, 'verse': '105', 'gist': 'God’s word is a lamp unto my feet.', 'text': 'Thy word is a lamp unto my feet, and a light unto my path.' },
                    {'id': 'ot12', 'index': 12, 'difficulty': 1, 'book': 'Psalm', 'chapter': 127, 'verse': '3', 'gist': 'Children are an heritage of the Lord.', 'text': 'Lo, children are an heritage of the Lord: and the fruit of the womb is his reward.' },
                    {'id': 'ot13', 'index': 13, 'difficulty': 2, 'book': 'Proverbs', 'chapter': 3, 'verse': '5-6', 'gist': 'Trust in the Lord.', 'text': 'Trust in the Lord with all thine heart; and lean not unto thine own understanding.<br/<br/>In all thy ways acknowledge him, and he shall direct thy paths.' },
                    {'id': 'ot14', 'index': 14, 'difficulty': 2, 'book': 'Isaiah', 'chapter': 1, 'verse': '18', 'gist': 'Though your sins be as scarlet', 'text': 'Come now, and let us reason together, saith the Lord: though your sins be as scarlet, they shall be as white as snow; though they be red like crimson, they shall be as wool.' },
                    {'id': 'ot15', 'index': 15, 'difficulty': 2, 'book': 'Isaiah', 'chapter': 5, 'verse': '20', 'gist': 'Woe unto them that call evil good.', 'text': 'Woe unto them that call evil good, and good evil; that put darkness for light, and light for darkness; that put bitter for sweet, and sweet for bitter!' },
                    {'id': 'ot16', 'index': 16, 'difficulty': 4, 'book': 'Isaiah', 'chapter': 29, 'verse': '13-14', 'gist': 'A marvelous work and a wonder', 'text': 'Wherefore the Lord said, Forasmuch as this people draw near me with their mouth, and with their lips do honour me, but have removed their heart far from me, and their fear toward me is taught by the precept of men:<br/><br/>Therefore, behold, I will proceed to do a marvellous work among this people, even a marvellous work and a wonder: for the wisdom of their wise men shall perish, and the understanding of their prudent men shall be hid.' },
                    {'id': 'ot17', 'index': 17, 'difficulty': 4, 'book': 'Isaiah', 'chapter': 53, 'verse': '3-5', 'gist': 'Jesus Christ bore our griefs and suffered for our sins.', 'text': 'He is despised and rejected of men; a man of sorrows, and acquainted with grief: and we hid as it were our faces from him; he was despised, and we esteemed him not.<br/><br/>Surely he hath borne our griefs, and carried our sorrows: yet we did esteem him stricken, smitten of God, and afflicted.<br/><br/But he was wounded for our transgressions, he was bruised for our iniquities: the chastisement of our peace was upon him; and with his stripes we are healed.' },
                    {'id': 'ot18', 'index': 18, 'difficulty': 4, 'book': 'Isaiah', 'chapter': 58, 'verse': '6-7', 'gist': 'The law of the fast', 'text': 'Is not this the fast that I have chosen? to loose the bands of wickedness, to undo the heavy burdens, and to let the oppressed go free, and that ye break every yoke?<br/><br/>Is it not to deal thy bread to the hungry, and that thou bring the poor that are cast out to thy house? when thou seest the naked, that thou cover him; and that thou hide not thyself from thine own flesh?' },
                    {'id': 'ot19', 'index': 19, 'difficulty': 4, 'book': 'Isaiah', 'chapter': 58, 'verse': '13-14', 'gist': 'The Sabbath is the Lord’s holy day.', 'text': 'If thou turn away thy foot from the sabbath, from doing thy pleasure on my holy day; and call the sabbath a delight, the holy of the Lord, honourable; and shalt honour him, not doing thine own ways, nor finding thine own pleasure, nor speaking thine own words:<br/><br/>Then shalt thou delight thyself in the Lord; and I will cause thee to ride upon the high places of the earth, and feed thee with the heritage of Jacob thy father: for the mouth of the Lord hath spoken it.' },
                    {'id': 'ot20', 'index': 20, 'difficulty': 2, 'book': 'Jeremiah', 'chapter': 1, 'verse': '4-5', 'gist': 'Jeremiah was foreordained before birth.', 'text': 'Then the word of the Lord came unto me, saying,<br/><br/>Before I formed thee in the belly I knew thee; and before thou camest forth out of the womb I sanctified thee, and I ordained thee a prophet unto the nations.' },
                    {'id': 'ot21', 'index': 21, 'difficulty': 4, 'book': 'Ezekiel', 'chapter': 37, 'verse': '15-17', 'gist': 'The Bible and the Book of Mormon are joined together.', 'text': 'The word of the Lord came again unto me, saying,<br/><br/>Moreover, thou son of man, take thee one stick, and write upon it, For Judah, and for the children of Israel his companions: then take another stick, and write upon it, For Joseph, the stick of Ephraim, and for all the house of Israel his companions:<br/><br/>And join them one to another into one stick; and they shall become one in thine hand.' },
                    {'id': 'ot22', 'index': 22, 'difficulty': 1, 'book': 'Amos', 'chapter': 3, 'verse': '7', 'gist': 'God reveals His secret to His prophets.', 'text': 'Surely the Lord God will do nothing, but he revealeth his secret unto his servants the prophets.' },
                    {'id': 'ot23', 'index': 23, 'difficulty': 4, 'book': 'Malachi', 'chapter': 3, 'verse': '8-10', 'gist': 'Paying tithing brings blessings.', 'text': 'Will a man rob God? Yet ye have robbed me. But ye say, Wherein have we robbed thee? In tithes and offerings.<br/><br/>Ye are cursed with a curse: for ye have robbed me, even this whole nation.<br/><br/>Bring ye all the tithes into the storehouse, that there may be meat in mine house, and prove me now herewith, saith the Lord of hosts, if I will not open you the windows of heaven, and pour you out a blessing, that there shall not be room enough to receive it.' },
                    {'id': 'ot24', 'index': 24, 'difficulty': 3, 'book': 'Malachi', 'chapter': 4, 'verse': '5-6', 'gist': 'Elijah will turn the hearts of fathers and children.', 'text': 'Behold, I will send you Elijah the prophet before the coming of the great and dreadful day of the Lord:<br/><br/>And he shall turn the heart of the fathers to the children, and the heart of the children to their fathers, lest I come and smite the earth with a curse.' }
                ]
            },
            'nt': {
                'scriptures': [
                    {'id': 'nt0', 'index': 0, 'difficulty': 1, 'book': '', 'chapter': '', 'verse': '', 'gist': '', 'text': '' },
                    {'id': 'nt1', 'index': 1, 'difficulty': 1, 'book': '', 'chapter': '', 'verse': '', 'gist': '', 'text': '' },
                    {'id': 'nt2', 'index': 2, 'difficulty': 1, 'book': '', 'chapter': '', 'verse': '', 'gist': '', 'text': '' },
                    {'id': 'nt3', 'index': 3, 'difficulty': 1, 'book': '', 'chapter': '', 'verse': '', 'gist': '', 'text': '' },
                    {'id': 'nt4', 'index': 4, 'difficulty': 1, 'book': '', 'chapter': '', 'verse': '', 'gist': '', 'text': '' },
                    {'id': 'nt5', 'index': 5, 'difficulty': 1, 'book': '', 'chapter': '', 'verse': '', 'gist': '', 'text': '' },
                    {'id': 'nt6', 'index': 6, 'difficulty': 1, 'book': '', 'chapter': '', 'verse': '', 'gist': '', 'text': '' },
                    {'id': 'nt7', 'index': 7, 'difficulty': 1, 'book': '', 'chapter': '', 'verse': '', 'gist': '', 'text': '' },
                    {'id': 'nt8', 'index': 8, 'difficulty': 1, 'book': '', 'chapter': '', 'verse': '', 'gist': '', 'text': '' },
                    {'id': 'nt9', 'index': 9, 'difficulty': 1, 'book': '', 'chapter': '', 'verse': '', 'gist': '', 'text': '' },
                    {'id': 'nt10', 'index': 10, 'difficulty': 1, 'book': '', 'chapter': '', 'verse': '', 'gist': '', 'text': '' },
                    {'id': 'nt11', 'index': 11, 'difficulty': 1, 'book': '', 'chapter': '', 'verse': '', 'gist': '', 'text': '' },
                    {'id': 'nt12', 'index': 12, 'difficulty': 1, 'book': '', 'chapter': '', 'verse': '', 'gist': '', 'text': '' },
                    {'id': 'nt13', 'index': 13, 'difficulty': 1, 'book': '', 'chapter': '', 'verse': '', 'gist': '', 'text': '' },
                    {'id': 'nt14', 'index': 14, 'difficulty': 1, 'book': '', 'chapter': '', 'verse': '', 'gist': '', 'text': '' },
                    {'id': 'nt15', 'index': 15, 'difficulty': 1, 'book': '', 'chapter': '', 'verse': '', 'gist': '', 'text': '' },
                    {'id': 'nt16', 'index': 16, 'difficulty': 1, 'book': '', 'chapter': '', 'verse': '', 'gist': '', 'text': '' },
                    {'id': 'nt17', 'index': 17, 'difficulty': 1, 'book': '', 'chapter': '', 'verse': '', 'gist': '', 'text': '' },
                    {'id': 'nt18', 'index': 18, 'difficulty': 1, 'book': '', 'chapter': '', 'verse': '', 'gist': '', 'text': '' },
                    {'id': 'nt19', 'index': 19, 'difficulty': 1, 'book': '', 'chapter': '', 'verse': '', 'gist': '', 'text': '' },
                    {'id': 'nt20', 'index': 20, 'difficulty': 1, 'book': '', 'chapter': '', 'verse': '', 'gist': '', 'text': '' },
                    {'id': 'nt21', 'index': 21, 'difficulty': 1, 'book': '', 'chapter': '', 'verse': '', 'gist': '', 'text': '' },
                    {'id': 'nt22', 'index': 22, 'difficulty': 1, 'book': '', 'chapter': '', 'verse': '', 'gist': '', 'text': '' },
                    {'id': 'nt23', 'index': 23, 'difficulty': 1, 'book': '', 'chapter': '', 'verse': '', 'gist': '', 'text': '' },
                    {'id': 'nt24', 'index': 24, 'difficulty': 1, 'book': '', 'chapter': '', 'verse': '', 'gist': '', 'text': '' }
                ]
            },
            'dc': {
                'scriptures': [
                    {'id': 'dc0', 'index': 0, 'difficulty': 1, 'book': '', 'chapter': '', 'verse': '', 'gist': '', 'text': '' },
                    {'id': 'dc1', 'index': 1, 'difficulty': 1, 'book': '', 'chapter': '', 'verse': '', 'gist': '', 'text': '' },
                    {'id': 'dc2', 'index': 2, 'difficulty': 1, 'book': '', 'chapter': '', 'verse': '', 'gist': '', 'text': '' },
                    {'id': 'dc3', 'index': 3, 'difficulty': 1, 'book': '', 'chapter': '', 'verse': '', 'gist': '', 'text': '' },
                    {'id': 'dc4', 'index': 4, 'difficulty': 1, 'book': '', 'chapter': '', 'verse': '', 'gist': '', 'text': '' },
                    {'id': 'dc5', 'index': 5, 'difficulty': 1, 'book': '', 'chapter': '', 'verse': '', 'gist': '', 'text': '' },
                    {'id': 'dc6', 'index': 6, 'difficulty': 1, 'book': '', 'chapter': '', 'verse': '', 'gist': '', 'text': '' },
                    {'id': 'dc7', 'index': 7, 'difficulty': 1, 'book': '', 'chapter': '', 'verse': '', 'gist': '', 'text': '' },
                    {'id': 'dc8', 'index': 8, 'difficulty': 1, 'book': '', 'chapter': '', 'verse': '', 'gist': '', 'text': '' },
                    {'id': 'dc9', 'index': 9, 'difficulty': 1, 'book': '', 'chapter': '', 'verse': '', 'gist': '', 'text': '' },
                    {'id': 'dc10', 'index': 10, 'difficulty': 1, 'book': '', 'chapter': '', 'verse': '', 'gist': '', 'text': '' },
                    {'id': 'dc11', 'index': 11, 'difficulty': 1, 'book': '', 'chapter': '', 'verse': '', 'gist': '', 'text': '' },
                    {'id': 'dc12', 'index': 12, 'difficulty': 1, 'book': '', 'chapter': '', 'verse': '', 'gist': '', 'text': '' },
                    {'id': 'dc13', 'index': 13, 'difficulty': 1, 'book': '', 'chapter': '', 'verse': '', 'gist': '', 'text': '' },
                    {'id': 'dc14', 'index': 14, 'difficulty': 1, 'book': '', 'chapter': '', 'verse': '', 'gist': '', 'text': '' },
                    {'id': 'dc15', 'index': 15, 'difficulty': 1, 'book': '', 'chapter': '', 'verse': '', 'gist': '', 'text': '' },
                    {'id': 'dc16', 'index': 16, 'difficulty': 1, 'book': '', 'chapter': '', 'verse': '', 'gist': '', 'text': '' },
                    {'id': 'dc17', 'index': 17, 'difficulty': 1, 'book': '', 'chapter': '', 'verse': '', 'gist': '', 'text': '' },
                    {'id': 'dc18', 'index': 18, 'difficulty': 1, 'book': '', 'chapter': '', 'verse': '', 'gist': '', 'text': '' },
                    {'id': 'dc19', 'index': 19, 'difficulty': 1, 'book': '', 'chapter': '', 'verse': '', 'gist': '', 'text': '' },
                    {'id': 'dc20', 'index': 20, 'difficulty': 1, 'book': '', 'chapter': '', 'verse': '', 'gist': '', 'text': '' },
                    {'id': 'dc21', 'index': 21, 'difficulty': 1, 'book': '', 'chapter': '', 'verse': '', 'gist': '', 'text': '' },
                    {'id': 'dc22', 'index': 22, 'difficulty': 1, 'book': '', 'chapter': '', 'verse': '', 'gist': '', 'text': '' },
                    {'id': 'dc23', 'index': 23, 'difficulty': 1, 'book': '', 'chapter': '', 'verse': '', 'gist': '', 'text': '' },
                    {'id': 'dc24', 'index': 24, 'difficulty': 1, 'book': '', 'chapter': '', 'verse': '', 'gist': '', 'text': '' }
                ]
            },
            'custom': {
                'scriptures': [
                ]
            }
    		
    	}

    	return {
            getMasteryScriptures: function() {
                return mastery;
            }
        };
    });