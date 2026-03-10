const wavesurfer1 = WaveSurfer.create({
container: '#waveform1',
waveColor: 'grey',
progressColor: 'red',
height: 80
})

wavesurfer1.load('audio/character.mp3')


const wavesurfer2 = WaveSurfer.create({
container: '#waveform2',
waveColor: 'grey',
progressColor: 'red',
height: 80
})

wavesurfer2.load('audio/commercial.mp3')


const wavesurfer3 = WaveSurfer.create({
container: '#waveform3',
waveColor: 'grey',
progressColor: 'red',
height: 80
})

wavesurfer3.load('audio/narration.mp3')


function toggleAudio(player){
player.playPause()
}


