interface Administrateur {
    nom: string;
    email: string;
    ip: string;
    dt_connexion: Date;
    login: string;
    password: string;
  }
  
  type UtilisateurAnonyme = Pick<Administrateur, 'ip'> & Partial<Pick<Administrateur, 'nom'>>;
  
  const test: UtilisateurAnonyme = {
    ip: "127.0.0.1"
  };
  