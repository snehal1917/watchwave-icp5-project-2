function play(audioId){
    
    var s1 = document.getElementById('s1');
    var s2 = document.getElementById('s2');
    if (s1.duration > 0 && !s1.paused) {
       s1.pause();
       var audio = document.getElementById(audioId);
       audio.play();

    } else if(s2.duration > 0 && !s2.paused){
       s2.pause();
       var audio = document.getElementById(audioId);
       audio.play();
    }else if(s3.duration > 0 && !s3.paused){
       s3.pause();
       var audio = document.getElementById(audioId);
       audio.play();
    }else if(s4.duration > 0 && !s4.paused){
       s4.pause();
       var audio = document.getElementById(audioId);
       audio.play();
    }
    else if(s5.duration > 0 && !s5.paused){
       s5.pause();
       var audio = document.getElementById(audioId);
       audio.play();
    }
    else if(s6.duration > 0 && !s6.paused){
       s6.pause();
       var audio = document.getElementById(audioId);
       audio.play();
    }
    else if(s7.duration > 0 && !s7.paused){
       s7.pause();
       var audio = document.getElementById(audioId);
       audio.play();
    }
    else if(s8.duration > 0 && !s8.paused){
       s8.pause();
       var audio = document.getElementById(audioId);
       audio.play();
    }
    else if(s9.duration > 0 && !s9.paused){
       s9.pause();
       var audio = document.getElementById(audioId);
       audio.play();
    }
    else if(s10.duration > 0 && !s10.paused){
       s10.pause();
       var audio = document.getElementById(audioId);
       audio.play();
    }
    else if(s11.duration > 0 && !s11.paused){
       s11.pause();
       var audio = document.getElementById(audioId);
       audio.play();
    }
    else if(s12.duration > 0 && !s12.paused){
       s4.pause();
       var audio = document.getElementById(audioId);
       audio.play();
    }

    else{
       var audio = document.getElementById(audioId);
       audio.play(); 
    }
  }