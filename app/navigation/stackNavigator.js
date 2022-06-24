import Home from "../screens/Home";
import Transaction from "../screens/Home";
import Account from "../screens/Home";
import Splash from '../screens/Splash';

export const WelcomeStack = 
[
  {
    screen:Splash,
    name:"Splash"
  },
];

export const AppStack = 
[
  {
    screen:Home,
    name:"Home"
  },
  {
    screen:Account,
    name:"Account"
  },
  {
    screen:Transaction,
    name:"Transaction"
  },
]
