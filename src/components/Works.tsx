import Section from './Section'
import Work from './Work'

function Works() {
  return (
    <Section title="recent<br />projects" id="works">
      <Work
        title="Pebbles"
        src="/assets/pebbles-mockup.jpg"
        alt="Mockup of a project called Pebbles"
        width={679}
        height={904}
        description="design / development / team project"
        link="https://github.com/jentlAntheunis/TeamProject-CronicPain"
      />
      <Work
        title="Spotify<br />Playlist Viewer"
        src="/assets/spotify-playlist-viewer-mockup.jpg"
        alt="Mockup of a project called Spotify Playlist Viewer"
        width={679}
        height={904}
        description="design / development"
        link="https://github.com/juul-vandevelde-howest/Interaction-Design-Eindopdracht"
        mirror={true}
      />
    </Section>
  )
}

export default Works
