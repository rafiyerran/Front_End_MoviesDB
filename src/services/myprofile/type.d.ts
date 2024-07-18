
  type ResponseMyProfile = {
    avatar: Avatar;
    id: number;
    iso_639_1: string;
    iso_3166_1: string;
    name: string;
    include_adult: boolean;
    username: string;
  };
  
  type Avatar = {
    gravatar: Gravatar;
    tmdb: Tmdb[];
  };
  
  type Gravatar = {
    hash: string;
  };
  
  type Tmdb = {
    avatar_path: string;
  };
  
  
  
  
  