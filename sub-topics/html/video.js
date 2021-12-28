var formatheader = `
    <tr class="bg-secondary">
        <th>Format</th>
        <th>File</th>
        <th>Description</th>
    </tr>

`;


var videoFormats = `
    <tr>
        <th scope="row">MPEG</th>
        <td>.mpg<br>.mpeg</td>
        <td class="format-description">MPEG. Developed by the Moving Pictures Expert Group. The first popular video format on the web. Not supported anymore in HTML.</td>
    </tr>
    <tr>
        <th scope="row">AVI</td>
        <td>.avi</td>
        <td class="format-description">AVI (Audio Video Interleave). Developed by Microsoft. Commonly used in video cameras and TV hardware. Plays well on Windows computers, but not in web browsers.</td>
    </tr>
    <tr>
        <th scope="row">WMV</td>
        <td>.wmv</td>
        <td class="format-description">WMV (Windows Media Video). Developed by Microsoft. Commonly used in video cameras and TV hardware. Plays well on Windows computers, but not in web browsers.</td>
    </tr>`
;

document.getElementById("tablebody").innerHTML = formatheader + videoFormats

var mediaFormats = `
      <tr>
        <th scope="row">QuickTime</td>
        <td>.mov</td>
        <td class="format-description">QuickTime. Developed by Apple. Commonly used in video cameras and TV hardware. Plays well on Apple computers, but not in web browsers.</td>
      </tr>
      <tr>
        <th scope="row">RealVideo</td>
        <td>.rm<br>.ram</td>
        <td class="format-description">RealVideo. Developed by Real Media to allow video streaming with low bandwidths. Does not play in web browsers.</td>
      </tr>
      <tr>
        <th scope="row">Flash</td>
        <td>.swf <br> .flv</td>
        <td class="format-description">Flash. Developed by Macromedia. Often requires an extra component (plug-in) to play in web browsers.</td>
      </tr>
      `;

      var extraFormats = `
      <tr>
        <th scope="row">Ogg</td>
        <td>.ogg</td>
        <td class="format-description">Theora Ogg. Developed by the Xiph.Org Foundation. Supported by HTML.</td>
      </tr>
      <tr>
        <th scope="row">WebM</td>
        <td>.webm</td>
        <td class="format-description">WebM. Developed by Mozilla, Opera, Adobe, and Google. Supported by HTML.</td>
      </tr>
      <tr>
        <th scope="row">MPEG-4 or MP4</td>
        <td>.mp4</td>
        <td class="format-description">MP4. Developed by the Moving Pictures Expert Group. Commonly used in video cameras and TV hardware. Supported by all browsers and  recommended by YouTube. </td>
      </tr>
      `;
      var videoCount = 3;

      document.getElementById("showNextbtn").onclick = function() {
        if (videoCount == 3) {
            document.getElementById("tablebody").innerHTML = formatheader + mediaFormats
            videoCount = videoCount + 3;
        } else if (videoCount == 6) {
            document.getElementById("tablebody").innerHTML = formatheader + extraFormats
            videoCount = videoCount + 3;
        }
        
      }
      document.getElementById("showBackbtn").onclick = function() {
        if (videoCount == 9) {
            document.getElementById("tablebody").innerHTML = formatheader + mediaFormats
            videoCount = videoCount - 3;
        } else if (videoCount == 6) {
            document.getElementById("tablebody").innerHTML = formatheader + videoFormats
            videoCount = videoCount - 3;
        }
        
      }
      

/////////////////////////////////////////////////////////////////////////////////////////////////////////






var audioFormats = `

    <tr>
        <th scope="row">MIDI</th>
        <td>.mid<br>.midi</td>
        <td class="format-description">MIDI (Musical Instrument Digital Interface). Main format for all electronic music devices like synthesizers and PC sound cards. MIDI files do not contain sound, but digital notes that can be played by electronics. Plays well on all computers and music hardware, but not in web browsers.</td>
    </tr>
    <tr>
        <th scope="row">RealAudio</td>
        <td>.rm<br>.ram</td>
        <td class="format-description">RealAudio. Developed by Real Media to allow streaming of audio with low bandwidths. Does not play in web browsers.</td>
    </tr>
    <tr>
        <th scope="row">WMA</td>
        <td>.wma</td>
        <td class="format-description">WMA (Windows Media Audio). Developed by Microsoft. Plays well on Windows computers, but not in web browsers.</td>
    </tr>


`;

var extraAudioFormats = `
      <tr>
        <th scope="row">AAC</td>
        <td>.aac</td>
        <td class="format-description">AAC (Advanced Audio Coding). Developed by Apple as the default format for iTunes. Plays well on Apple computers, but not in web browsers.</td>
      </tr>
      <tr>
        <th scope="row">WAV</td>
        <td>.rm<br>.wav</td>
        <td class="format-description">WAV. Developed by IBM and Microsoft. Plays well on Windows, Macintosh, and Linux operating systems. Supported by HTML.</td>
      </tr>
      <tr>
        <th scope="row">Ogg</td>
        <td>.swf <br> .ogg</td>
        <td class="format-description">Ogg. Developed by the Xiph.Org Foundation. Supported by HTML.</td>
      </tr>
      `;

var extraAudioFormats1 = `
      <tr>
        <th scope="row">MP3</td>
        <td>.mp3</td>
        <td class="format-description">MP3 files are actually the sound part of MPEG files. MP3 is the most popular format for music players. Combines good compression (small files) with high quality. Supported by all browsers.</td>
      </tr>
      <tr>
        <th scope="row">MP4</td>
        <td>.mp4</td>
        <td class="format-description">MP4 is a video format, but can also be used for audio. Supported by all browsers.</td>
      </tr>
      `;

      document.getElementById("tablebody-audio").innerHTML = formatheader + audioFormats


      var audioCount = 3;

      document.getElementById("showNextbtn-audio").onclick = function() {
        if (audioCount == 3) {
            document.getElementById("tablebody-audio").innerHTML = formatheader + extraAudioFormats
            audioCount = audioCount + 3;
        } else if (audioCount == 6) {
            document.getElementById("tablebody-audio").innerHTML = formatheader + extraAudioFormats1
            audioCount = audioCount + 3;
        }
        
      }
      document.getElementById("showBackbtn-audio").onclick = function() {
        if (audioCount == 9) {
            document.getElementById("tablebody-audio").innerHTML = formatheader + extraAudioFormats
           audioCount = audioCount - 3;
        } else if (audioCount == 6) {
            document.getElementById("tablebody-audio").innerHTML = formatheader + audioFormats
            audioCount = audioCount - 3;
        }
        
      }


      var myVideo = document.getElementById("video1"); 
          
      function playPause() { 
        if (myVideo.paused) 
          myVideo.play(); 
        else 
          myVideo.pause(); 
      } 
      
      function makeBig() { 
          myVideo.height = 560; 
      } 
      
      function makeSmall() { 
          myVideo.height = 100; 
      } 
      
      function makeNormal() { 
          myVideo.height = 200; 
      } 







