    // Variables
    var img = document.getElementById('img');
    var title = document.getElementById('title');
    var author = document.getElementById('author');
    var album = document.getElementById('album')
    var player = document.getElementById('player');
    var volume = document.getElementById('volume');
    var position = document.getElementById('position');
    var currentTime= document.getElementById('currentTime');
    var durationTime = document.getElementById('durationTime');

    document.getElementById('title').innerHTML = title;

    // Init
    player.src = playlist[0].source;
    player.volume = volume.value / 100;
    position.value = player.currentTime;
    img.src = playlist[0].img;
    title.innerText = playlist[0].title;
    author.innerText = playlist[0].author;
    album.innerText = playlist[0].album;

    // Timer
    setInterval(function () {
        position.value = player.currentTime * (100 / player.duration);

        var currentMinutes = Math.floor(player.currentTime / 60);
        var currentSeconds = Math.floor(player.currentTime - currentMinutes * 60);
        var durationMinutes = Math.floor(player.duration / 60);
        var durationSeconds = Math.floor(player.duration - durationMinutes * 60);
        // Changement de musique automatique
        if (currentSeconds == durationSeconds && currentMinutes == durationMinutes) {
            onNext();
        }
        if (currentSeconds < 10) currentSeconds = "0" + currentSeconds;
        if (durationSeconds < 10) durationSeconds = "0" + durationSeconds;
        if (currentMinutes < 10) currentMinutes = "0" + currentMinutes;
        if (durationMinutes < 10) durationMinutes = "0" + durationMinutes;

        currentTime.innerText = currentMinutes + ":" + currentSeconds;
        durationTime.innerText = durationMinutes + ":" + durationSeconds;
    }, 1000);

    var playButton = document.getElementById("play-button");
        
    function onLecture() {
        
        if(playButton.src == "img/play.png"){
            player.play();
            playButton.src = "img/pause.png";
        } else if (playButton.src == "img/pause.png") {
            player.pause();
            playButton.src = "img/play.png";
        }
    }

    var nolikeButton = document.getElementById("no-like");

    function onLike() {
        
        if(nolikeButton.src == "img/no-like.png"){
            //player.play();
            nolikeButton.src = "img/like.png";
        } else if (nolikeButton.src == "img/like.png") {
            //player.pause();
            nolikeButton.src = "img/no-like.png";
        }
    }

    function onPrev() {
        var currentIndex = playlist.findIndex(function(item) {                                   
            if(player.src.search(item.source) != -1) return true;
            else return false;
        });

        if (currentIndex == 0) {
            var song = playlist[playlist.length-1];
        } else {
            var song = playlist[--currentIndex];
        }

        player.src = song.source;
        img.src = song.img;
        title.innerText = song.title;
        author.innerText = song.author;
        album.innerText = song.album;

        player.play();
        playButton.src = "img/pause.png";
    }

    function onNext() {
        var currentIndex = playlist.findIndex(function(item) {
            if(player.src.search(item.source) != -1) return true;
            else return false;
        });
        if (currentIndex == playlist.length-1) {
            var song = playlist[0];
        } else {
            var song = playlist[++currentIndex];
        }

        player.src = song.source;
        img.src = song.img;
        title.innerText = song.title;
        author.innerText = song.author;
        album.innerText = song.album;

        player.play();
        playButton.src = "img/pause.png";
    }

    function onPosition(value) {
        var currentTime = player.duration * (value / 100);
        player.currentTime = currentTime;
    }
    
    function onVolume(value) {
        player.volume = value / 100;
    }

    if (currentTime == durationTime) {
        
    }