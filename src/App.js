import flowchart from './flowchart.png';
import './App.css';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
    <div className="App">
      <Container maxWidth="md" 
      sx={{
        '& > :not(style)': {
          m: 4,
          p:4
        },
      }}>
      
      <Paper elevation={3} >
          <div className="title">
              DUBBING <span className={"titlesub"}>and its modulation on culture</span>
          </div>
          <img src={flowchart} className="flowchart" alt="logo" />
          <p className="content">
          The more facets of society that language is used in, the more its features and functions grow in complication. As mentioned by Niklas Luhmann, communication may not be solely based on language but also on gestures and kinesics labeled as ‘symbolically generalized communication media' (63). However, language, especially the exchange of language between two mediums plays an integral role in how humans communicate. Cary Wolfe discusses how Ludwig Wittgenstein and Martin Heidegger introduced the idea that language establishes a sort of world within the world — a world of abstract meaning and concepts, and how this is an essential feature of the metaphysical human (233). I agree with Wittgenstein and Heidegger to a limited extent as I would like to extend this idea with the existence of sub-worlds within these “worlds of worlds.” 
          <br/><br/>
          There is not one kind of human, and thus, no one kind of communication between two humans. Most notably, different cultures and languages lead to different sub-worlds. As McLuhan argues, “Each mother tongue teaches its users a way of seeing and feeling the world, and of acting in the world, that is quite unique” (80). Due to these ontological barriers between groups of humans, the transfer of technology and thoughts becomes more challenging than it initially seems. Communicating between cultures not only requires translating the language but also the societal aspects of it. A model of such information transformation and transfer can be analyzed in the technology of dubbing in audiovisual media.
          <br/><br/>
          </p>
          <iframe width="100%" height="415" src="https://www.youtube.com/embed/AMgKdHgZt2I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
          <p className="content">
          Translation in audiovisual media allows for the spread of this content beyond the culture of its source. Even though processes such as subtitles exist, oftentimes, dubbing is more accessible for audiences who cannot read or are poor at reading the local language. Dubbing allows for cultures to be shared between societies with ease. However, any piece of media transporting from one culture to another is controlled by the quality of or the choices made during translation. It is up to the translater on which cultural elements to allow to be absorbed by the new society. Thus, the process of dubbing leads to the control of cultural evolution. As Don Ihde discusses his ideology of cultural hermeneutics in ‘Technology and the Lifeworld’, controlling culture isn’t something absolute and complete, but neither is it a neutral form (141). I believe this ‘control’ lies in a complex state, somewhere in the middle, in some form that cannot be generalized as sheer ‘control’ but as ‘modulation’. 
          <br/><br/>
          Dubbing allows for the transfer of audiovisual content between different cultures and societies. Films and TV shows transferred from a foreign source can impact and alter technologies, culture, and society. However, this transfer isn’t pure for two main reasons. From a linguistic point of view, there are no absolute translations as there are rarely direct translations between two languages. McLuhan, Ihde, and Wolfe all agree that languages are ingrained in the differences between cultures, and thus communication can never be perfectly refined. Secondly, something particular to dubbing is the freedom and choice attained when dubbing content. The dubbing can decide what part of a foreign culture to let in or what aspects of local cultures to preserve. However, it is not absolute control as the foreign culture pertains to the content through the visual image, or through the lens of dubbing what can be seen as its constraints. Thus, due to the ever-increasing exchange of audiovisual media between societies, these cultures and technologies will always be ‘modulated’ but not ‘controlled’.
          <br/><br/>
          </p>
          <Divider/>
          <br/><br/>
          WORKS CITED
          <p className="content">
          Wolfe, Carry. “Language.” Critical Terms for Media Studies, by Mitchell, W. J. T., and Mark B. N. Hansen, The University of Chicago Press, 2010, pp. 233-248.
          <br/><br/>
          Luhmann, Niklas. 1994. “How Can the Mind Participate in Communication?” In Materialities of Communication, ed. Hans Ulrich Gumbrecht and K. Ludwig Pfeiffer, 371–88. Stanford, CA: Stanford University Press.
          <br/><br/>
          McLuhan, Marshall. Understanding Media: The Extensions of Man. “The Spoken Word: Flower of Evil?” 1st MIT Press ed, MIT Press, 1994, pp 77-80
          <br/><br/>
          Ihde, Don. Technology and the Lifeworld: From Garden to Earth. Indiana University Press, 1990.
          <br/><br/>
          Mitchell, W. J. T., and Mark B. N. Hansen.  Critical Terms for Media Studies. “Introduction” The University of Chicago Press, 2010, pp. Vi-xxii
          <br/><br/><br/><br/>
          </p>
          WORKS USED
          <p className="content">
          “Pizza Delivery.” SpongeBob SquarePants, created by Stephen Hillenburg, season 1, episode 5, Nickelodeon Animation Studio, 1999
          <br/><br/>
          Captured!. Directed by Roy Del Ruth, performances by Leslie Howard and Margaret Lindsay, Warner Bros. Pictures, 1933.
          <br/><br/><br/><br/>
          </p>
          <p className="footer">
            FILMEDIA 6 - Midterm Project || Aditeya Shukla || Professor Shane Denson, Martabel Wasserman
          </p>
        </Paper>
      
      </Container>
      
    </div>
    </ThemeProvider>
  );
}

export default App;
