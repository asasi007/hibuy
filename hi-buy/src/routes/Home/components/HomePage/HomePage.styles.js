export default theme => ({
  // root: {
  //   ...theme.flexColumnCenter
  // },
  // section: {
  //   ...theme.flexColumnCenter
  // }
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    ...theme.flexColumnCenter,
    ...theme.flexRowCenter,
    background: 'rgb(255,239,203)',
    background:
      'linear-gradient(246deg, rgba(255,239,203,1) 35%, rgba(0,212,255,1) 100%)',
    padding: theme.spacing(8, 0, 6),
    minHeight: 500
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  info: {
    ...theme.flexColumnCenter,
    ...theme.flexRowCenter,
    padding: theme.spacing(8, 0, 6),
    minHeight: 400,
    backgroundColor: theme.palette.background.paper
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  cardMedia: {
    paddingTop: '56.25%' // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  }
})
