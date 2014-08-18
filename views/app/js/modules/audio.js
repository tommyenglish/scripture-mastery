var SM_AUDIO_MODULE = (function () {
    var channel_max = 10, thistime, a, audiochannels = new Array(), disableSound = false;
    
    for (a=0;a<channel_max;a++) {                                  
        audiochannels[a] = new Array();
        audiochannels[a]['channel'] = new Audio();                    
        audiochannels[a]['finished'] = -1;
    }
    function play_sound(s) {
        if(disableSound) {
            return;
        }

        for (a=0;a<audiochannels.length;a++) {
            thistime = new Date();
            if (audiochannels[a]['finished'] < thistime.getTime()) {
                audiochannels[a]['finished'] = thistime.getTime() + document.getElementById(s).duration*1000;
                audiochannels[a]['channel'].src = document.getElementById(s).src;
                audiochannels[a]['channel'].load();
                audiochannels[a]['channel'].play();
                break;
            }
        }
    }
    function toggleSound() {
        disableSound = !disableSound;
    }
 
    return {
        play: play_sound,
        toggleSound: toggleSound
    };

})();