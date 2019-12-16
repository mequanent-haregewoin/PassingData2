import React, { Component } from 'react';

class FavMovies extends Component{
render(){
const users= this.props.users;
const movies= this.props.movies;
const profiles = this.props.profiles;  
return(
  
  
   <div>
  {
  
   for(const i in movies)
        {
            console.log(movies[i].name);
            const usersLikeMovie=profiles.filter(profile => profile.favoriteMovieID == movies[i].id);
            //console.log(usersLikeMovie);
            if (usersLikeMovie.length >0)
            {
                      console.log('Liked By');
                      usersLikeMovie.map(user => {
                       for(const i in users){
                          if(user.userID==users[i].id){
                           console.log(users[i].name);
                          }
                       }	

                      });
            }
          else{
          console.log('None of the current users like the movie!');
          }
        }
  }
  </div>
 );
  
  
}
}

export default FavMovies