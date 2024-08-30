// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
// import Calculators from './Calculator/cal';
// import AxiosComponent from './axios/axios';
// import { Container, Typography, List, ListItem, ListItemText, Button } from '@mui/material';

// const Index = () => {
//   return (
//     <Container>
//       <Typography variant="h4" gutterBottom>
//         Index Page
//       </Typography>
//       <nav>
//         <List>
//           <ListItem button component={Link} to="/cal">
//             <ListItemText primary="Calculator" />
//           </ListItem>
//           <ListItem button component={Link} to="/axios">
//             <ListItemText primary="Axios" />
//           </ListItem>
//         </List>
//       </nav>
//     </Container>
//   );
// };

// const BackButton = () => {
//   const navigate = useNavigate();
//   return (
//     <Button variant="contained" color="secondary" onClick={() => navigate(-1)}>
//       Back
//     </Button>
//   );
// };

// const App = () => {
//   return (
//     <Router>
//       <Container style={{ marginTop: '2rem' }}>
//         <Routes>
//           <Route path="/" element={<Index />} />
//           <Route path="/cal" element={<><Calculators /> <BackButton /></>} />
//           <Route path="/axios" element={<><AxiosComponent/> <BackButton /></>} />
//         </Routes>
//       </Container>
//     </Router>
//   );
// };

// export default App;
