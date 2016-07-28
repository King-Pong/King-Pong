import angular from 'angular';
import 'angular-ui-router';
import 'angular-cookies';

// IMPORT UTILITIES
import config from './utilities/config';
import run from './utilities/run';
import SERVER from './utilities/server.constant';

// IMPORT CONTROLLERS
import SignUpController from './controllers/signup.controller';
import LeaderboardController from './controllers/leaderboard.controller';
import PlayerController from './controllers/player.controller';
import LayoutController from './controllers/layout.controller';
import TournamentController from './controllers/tournament.controller';
import MatchController from './controllers/match.controller';
import BracketController from './controllers/bracket.controller';

// IMPORT SERVICES
import UserService from './services/user.service';
import MatchService from './services/match.service';
import BackendService from './services/backend.service';

angular
    .module('app', ['ui.router', 'ngCookies'])
    .config(config)
    .run(run)
    .constant('SERVER', SERVER)
    .controller('SignUpController', SignUpController)
    .controller('LeaderboardController', LeaderboardController)
    .controller('PlayerController', PlayerController)
    .controller('LayoutController', LayoutController)
    .controller('MatchController', MatchController)
    .controller('BracketController', BracketController)
    .service('UserService', UserService)
    .service('MatchService', MatchService)
    .service('BackendService', BackendService);
