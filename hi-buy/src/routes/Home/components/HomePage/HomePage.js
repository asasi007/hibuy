import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
// import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
// import CameraIcon from '@material-ui/icons/PhotoCamera'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
// import Toolbar from '@material-ui/core/Toolbar'
import Container from '@material-ui/core/Container'
import Fab from '@material-ui/core/Fab'
import {
  ACCOUNT_PATH,
  LIST_PATH,
  LOGIN_PATH,
  SIGNUP_PATH
} from 'constants/paths'
import styles from './HomePage.styles'

const authWrapperUrl = 'https://github.com/mjrussell/redux-auth-wrapper'
const reactRouterUrl = 'https://github.com/ReactTraining/react-router'

const useStyles = makeStyles(styles)

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        hiBuy
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function Home() {
  const classes = useStyles()

  return (
    <React.Fragment>
      <CssBaseline />
      {/* <AppBar position="relative">
        <Toolbar>
          <CameraIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Album layout
          </Typography>
        </Toolbar>
      </AppBar> */}
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="md">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom>
              hiBuy / QuickBuy / BuyForMe
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph>
              hiBuy buys grocery items for you with the help of your neighbour.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Fab
                    href={SIGNUP_PATH}
                    variant="extended"
                    aria-label="Be a Helper"
                    size="large"
                    color="primary">
                    Be a Helper
                  </Fab>
                </Grid>
                <Grid item>
                  <Fab
                    href={SIGNUP_PATH}
                    variant="extended"
                    aria-label="Be a Buyer"
                    size="large"
                    color="secondary">
                    Be a Buyer
                  </Fab>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <div className={classes.info}>
          <Container maxWidth="lg">
            <Grid container spacing={5} justify="center">
              <Grid item xs={4}>
                <img
                  alt="featured"
                  src="https://source.unsplash.com/random"
                  width="100%"
                />
              </Grid>
              <Grid item xs={8}>
                <Typography
                  variant="h4"
                  align="left"
                  color="textPrimary"
                  paragraph>
                  Forget the tiresome tasks of gettting ready and going to shops
                  when you have no tea powder to make a cup of tea?
                </Typography>
                <Typography
                  variant="h6"
                  align="left"
                  color="textPrimary"
                  paragraph>
                  Yes, HiBuy helps you buy things by a couple of clicks. You
                  dont have to get ready ,board bus and go to shop to get the
                  things require in your kitchen.How easy it would be if someone
                  gets its for you ,say your neigbour.He buys the grocery items
                  for you with the help of HiBuy.
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="lg">
          <Typography variant="h4" align="center" color="textPrimary" paragraph>
            Start Shopping
          </Typography>
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map(card => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe
                      the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Fab
                      variant="extended"
                      aria-label="Buy Now"
                      size="small"
                      color="secondary">
                      Buy Now
                    </Fab>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p">
          Happy shopping!
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  )
}

// function Home() {
//   const classNamees = useStyles()

//   return (
//     <div classNameName={classNamees.root}>
//       <div classNameName="flex-row-center">
//         <h2>Home Route</h2>
//       </div>
//       <div classNameName="flex-row-center">
//         <div classNameName={classNamees.section}>
//           <h3>Routing</h3>
//           <span>
//             Redirecting and route protection done using:
//             <div>
//               <span>
//                 <a
//                   href={reactRouterUrl}
//                   target="_blank"
//                   rel="noopener noreferrer">
//                   react-router
//                 </a>
//               </span>
//               <span> and </span>
//               <a
//                 href={authWrapperUrl}
//                 target="_blank"
//                 rel="noopener noreferrer">
//                 redux-auth-wrapper
//               </a>
//             </div>
//           </span>
//         </div>
//         <div classNameName={classNamees.section}>
//           <h4>Logged Out</h4>
//           <span>
//             User is redirected to <pre>/login</pre> if not authenticated and
//             trying to vist:
//           </span>
//           <ul>
//             <li>
//               <Link to={LIST_PATH}>Projects</Link>
//             </li>
//             <li>
//               <Link to={ACCOUNT_PATH}>Account</Link>
//             </li>
//           </ul>
//         </div>
//         <div classNameName={classNamees.section}>
//           <h4>Logged In</h4>
//           <span>
//             User is redirected to <pre>/projects</pre> if authenticated and
//             trying to vist:
//           </span>
//           <ul>
//             <li>
//               <Link to={LOGIN_PATH}>Login</Link>
//             </li>
//             <li>
//               <Link to={SIGNUP_PATH}>Signup</Link>
//             </li>
//           </ul>
//         </div>
//         <div classNameName={classNamees.section}>
//           <div>
//             <h4>Forms</h4>
//             <span>Redirecting and route protection done using:</span>
//             <div>
//               <span>
//                 <a
//                   href={reactRouterUrl}
//                   target="_blank"
//                   rel="noopener noreferrer">
//                   redux-form
//                 </a>
//               </span>
//             </div>
//           </div>
//           <span>The following routes use redux-form:</span>
//           <Link to={ACCOUNT_PATH}>
//             <p>Account Page</p>
//           </Link>
//         </div>
//       </div>
//     </div>
//   )
// }

export default Home
