async function getSong() {
    try {
        const res = await fetch('/sotd');
        const data = await res.json();

        let embeded = data.youtube.replace('watch?v=', 'embed/')
        document.querySelector('#song').innerText = data.name;
        document.querySelector('iframe').src = embeded;
        document.querySelector('#album').innerText = data.album;
        document.querySelector('#lyrics').innerText = data.lyrics;

        if (data.taylorsversion === 'yes') {
            document.querySelector('#version').innerText += ' This is Taylor\'s Version that she re-recorded and now owns herself!'
        }

    } catch(err) {
        console.log(`Error ${err}`);
    }
};

getSong();