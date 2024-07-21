import Heading from './Heading.js';
import Section from './Section.js';

export default function ProfilePage() {
  return (
    <Section>
      <Heading>Viajando por Argentina</Heading>
      <Post
        title="¡Hola viajero!"
        body="Lee sobre mis aventuras por Tucumán."
      />
      <Post
        title="¡Hey familia!"
        body="He llegado a las Cataratas."
      />
      <AllPosts />
    </Section>
  );
}

function AllPosts() {
  return (
    <Section>
      <Heading>Publicaciones</Heading>
      <RecentPosts />
      <MainPosts />
    </Section>
  );
}

function MainPosts(){
return (
  <Section>
      <Heading>Publicaciones Antiguas</Heading>
      <Post
        title="Sabores de Bariloche"
        body="¡...esos chocolates con almendras!"
      />
      <Post
        title="Buenos Aires a ritmo del chamamé"
        body="¡Que sapucay!"
      />
    </Section>
)
}

function RecentPosts() {
  return (
    <Section>
      <Heading>Publicaciones recientes</Heading>
      <Post
        title="Las ballenas de Península de Valdés"
        body="¡cuanta fauna y flora!"
      />
      <Post
        title="Los Glaciares"
        body="¡Que impresionante!"
      />
    </Section>
  );
}

function Post({ title, body }) {
  return (
    <Section isFancy={true}>
      <Heading>
        {title}
      </Heading>
      <p><i>{body}</i></p>
    </Section>
  );
}

