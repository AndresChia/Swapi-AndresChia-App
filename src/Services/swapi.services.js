import ApolloClient, { gql } from "apollo-boost";


// import Loading from "../Components/Loading";

export const client = new ApolloClient({
  uri: "https://api.graph.cool/simple/v1/swapi"
});


export const STAR_WARS_FILMS = gql`
  {
    allFilms(first: 6, orderBy: releaseDate_ASC) {
      episodeId
      title
      releaseDate
      director
    }
  }`;


  
export const STAR_WARS_PERSONS_NUMBER = gql`{
    _allPersonsMeta{
      count
    }
  }
`

export const STAR_WARS_PERSONS = (pagina)=> gql`
 {
  allPersons(first: 10,skip:${pagina*10}, orderBy: name_ASC) {
    name,
    id,
    gender,
    films{
      id,
      director,
      planets {
        id,
        name
      } ,
      producers,
      title
    }
  }
}`;




