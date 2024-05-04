import Section from './Section'
import Work from './Work'
import pebbles from '../../public/assets/pebbles-mockup.jpg'
import spotify from '../../public/assets/spotify-playlist-viewer-mockup.jpg'

function Works() {
  return (
    <Section title="recent<br />projects" id="works">
      <Work
        title="Pebbles"
        src={pebbles}
        alt="Mockup of a project called Pebbles"
        description="design / development / team project"
        link="https://github.com/jentlAntheunis/TeamProject-CronicPain"
      />
      <Work
        title="Spotify<br />Playlist Viewer"
        src={spotify}
        alt="Mockup of a project called Spotify Playlist Viewer"
        description="design / development"
        link="https://github.com/juul-vandevelde-howest/Interaction-Design-Eindopdracht"
        mirror={true}
      />
    </Section>
  )
}

export default Works
