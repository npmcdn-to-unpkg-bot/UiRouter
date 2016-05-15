function HeroService($q) {
    var heroesPromise = $q.when([
      { id: 11, name: 'Mr. Nice' },
      ...
      ]);

    this.getHeroes = function() {
        return heroesPromise;
    };

    this.getHero = function(id) {
        return heroesPromise.then(function(heroes) {
            for(var i=0; i<heroes.length; i++) {
                if ( heroes[i].id == id) return heroes[i];
            }
        });
    };
}