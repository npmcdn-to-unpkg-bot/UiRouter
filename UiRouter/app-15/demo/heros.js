angular.module('heroes', [])
.component('heroes', {
    template: '<h2>Heroes</h2><ng-outlet></ng-outlet>',
    $routeConfig: [
      { path: '/', name: 'HeroList', component: 'heroList', useAsDefault: true },
      { path: '/:id', name: 'HeroDetail', component: 'heroDetail' }
    ]
}).component('heroList', {
    template:
      '<div ng-repeat="hero in $ctrl.heroes">\n' +
        '<a ng-link="[\'HeroDetail\', {id: hero.id}]">{{hero.name}}</a>\n' +
      '</div>',
    controller: HeroListComponent
})

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

function HeroListComponent(heroService) {
    var $ctrl = this;
    this.$routerOnActivate = function() {
        return heroService.getHeroes().then(function(heroes) {
            $ctrl.heroes = heroes;
        });
    }
}