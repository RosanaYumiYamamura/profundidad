import Heading from './Heading.js';
import Section from './Section.js';
import { useState } from 'react';
import { places } from './data.js';
import { getImageUrl } from './utils.js';


function FilterablePlaceTable({ places }) {
  const [filterText, setFilterText] = useState('');


  return (
    <div>
      <SearchBar 
        filterText={filterText} 
        onFilterTextChange={setFilterText} 
        />
      <PlacesTable 
        places={places} 
        filterText={filterText}
         />
         
    </div>
  );
}

function PlaceCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan="2">
        {category}
      </th>
    </tr>
  );
}

function PlaceRow({ place }) {
  const name = place.stocked ? place.name :
    <span style={{ color: 'red' }}>
      {place.name}
    </span>;

  return (
    <tr>
      <td>{name}</td>
      <td>{place.país}</td>
    </tr>
  );
}

function PlacesTable({ places, filterText}) {
  const rows = [];
  let lastCategory = null;

  places.forEach((place) => {
    if (
      place.name.toLowerCase().indexOf(
        filterText.toLowerCase()
      ) === -1
    ) {
      return;
   
    }
    if (place.category !== lastCategory) {
      rows.push(
        <PlaceCategoryRow
          category={place.category}
          key={place.category} />
      );
    }
    rows.push(
      <PlaceRow
        place={place}
        key={place.name} />
    );
    lastCategory = place.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Lugar</th>
          <th>País</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function SearchBar({
  filterText,
  onFilterTextChange,
}) {
  return (
    <form>
      <input 
        type="text" 
        value={filterText} placeholder="Buscar..." 
        onChange={(e) => onFilterTextChange(e.target.value)} />
      
    </form>
  );
}


export default function ProfilePage() {
  return (
    <Section>
      <Heading>Viajando por Argentina</Heading>
      <FilterablePlaceTable places={places} />
      <Peperulo />
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

function Peperulo(){
  const [isLarge, setIsLarge] = useState(false);
  const imageSize = isLarge ? 150 : 100;
  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={isLarge}
          onChange={e => {
            setIsLarge(e.target.checked);
          }}
        />
        Usa imágenes grandes
      </label>
      <hr />
      <List imageSize={imageSize} />
    </>
  )
}
function List({ imageSize }) {
  const listItems = places.map(place =>
    <li key={place.id}>
      <Place
        place={place}
        imageSize={imageSize}
      />
    </li>
  );
  return <ul>{listItems}</ul>;
}

function Place({ place, imageSize }) {
  return (
    <>
      <PlaceImage
        place={place}
        imageSize={imageSize}
      />
      <p>
        <b>{place.name}</b>
        {': ' + place.description}
      </p>
    </>
  );
}

function PlaceImage({ place, imageSize }) {
  return (
    <img
      src={getImageUrl(place)}
      alt={place.name}
      width={imageSize}
      height={imageSize}
    />
  );
}
