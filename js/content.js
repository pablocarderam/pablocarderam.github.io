/* JS Document */
/* Main js */

var section_indexes = [0,1,2,3,4];

var tit_music = "<a class=\"goToMusic\" onmouseout=\"lightDown('Music')\" onmouseover=\"lightUp('Music')\" onclick=\"goTo('Music')\">Music</a>&emsp;&emsp;&ensp;";
var tit_science = "<a class=\"goToScience\" onmouseout=\"lightDown('Science')\" onmouseover=\"lightUp('Science')\" onclick=\"goTo('Science')\">Science</a>&emsp;&emsp;&ensp;";
var tit_art = "<a class=\"goToArt\" onmouseout=\"lightDown('Art')\" onmouseover=\"lightUp('Art')\" onclick=\"goTo('Art')\">Art</a>&emsp;&emsp;&ensp;&nbsp;";
var tit_code = "<a class=\"goToCode\" onmouseout=\"lightDown('Code')\" onmouseover=\"lightUp('Code')\" onclick=\"goTo('Code')\">Code</a>&emsp;&emsp;&ensp;&nbsp;";
var tit_writing = "<a class=\"goToWriting\" onmouseout=\"lightDown('Writing')\" onmouseover=\"lightUp('Writing')\" onclick=\"goTo('Writing')\">Writing</a>&emsp;&emsp;&ensp;";

var menu_contents = [tit_art,tit_code,tit_music,tit_science,tit_writing];
var menu_titles = ["Art","Code","Music","Science","Writing"];

var cont_music = "<div id=\"Music\" class=\"text\"> \
  <span class=\"largerTxt\"><h1>Music</h1></span> \
  <p><iframe width=\"100%\" height=\"300\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay\" src=\"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/13940020&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true\"></iframe></p> \
  <p> \
    <b><i><span class=\"hand\">Funkprints </span></i></b>(2016): 4/4 funk arrangement of Wayne Shorter's jazz standard, Footprints. Sheet music available <a href=\"assets/stuff/Funkprints.pdf\" target=\"blank\">here</a>. \
  </p> \
  <p><iframe width=\"100%\" height=\"166\" scrolling=\"no\" frameborder=\"no\" src=\"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/293553807&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false\"></iframe></p> \
  <br><p> \
    <b><i><span class=\"hand\">Dos años </span></i></b>(2016): An album collecting two years of music recorded using iPads, electric violin, and the occasional ocarina. \
  </p> \
  <p><iframe style=\"border: 0; width: 350px; height: 470px;\" src=\"https://bandcamp.com/EmbeddedPlayer/album=2884925257/size=large/bgcol=333333/linkcol=e99708/tracklist=false/transparent=true/\" seamless><a href=\"http://pablocr.bandcamp.com/album/dos-a-os\">Dos años by Pablo CR</a></iframe></p> \
  <p> \
    Live recording of <b><i><span class=\"hand\">Cementerio central </span></i></b> (2016) \
  </p> \
  <p><iframe width=\"500\" height=\"315\" src=\"https://www.youtube.com/embed/VdngYIxVxfM\" frameborder=\"0\" allowfullscreen></iframe></p> \
  <br> \
</div>";

var cont_science = "<div id=\"Science\" class=\"text\"> \
  <span class=\"largerTxt\"><h1>Science</h1></span> \
  <ul> \
  <li>Akman, D.*, Callaway III, L.*, <span class=\"hand\">Cárdenas, P.</span>*, Nieve-Silva, J*, Chen, J., Espinoza, B., Arriola, L., Castillo–Garsow, C. (2017). <i>Cheating the Cheaters: Spatial Dynamics in the Evolutionary Stability of Antibiotic Resistance</i>. <a target=\"_blank\" href=\"https://mtbi.asu.edu/content/cheating-cheaters-spatial-dynamics-evolutionary-stability-antibiotic-resistance\">Technical report available from the Mathematical and Theoretical Biology Institute</a>, Arizona State University. *The authors contributed equally to the work.\
  <li>Akman, D.*, Callaway III, L.*, <span class=\"hand\">Cárdenas, P.</span>*, Nieve-Silva, J*. (2017). <i>Cheating the Cheaters: Modeling Evolutionarily Stable Treatments Against Antibiotic Resistance.</i> Poster at the <a target=\"_blank\" href=\"http://www.2017sacnas.org/\">2017 SACNAS Conference</a>, Salt Lake City, USA, October 19–21, 2017. *: The authors contributed equally to the work.
  <li>Forero, L., <span class=\"hand\">Cárdenas, P.</span>, Reyes, A. (2016). <i>Identification of Bacteriophage crAssphage Through Hidden Markov Models.</i>. Poster at the <a target=\"_blank\" href=\"https://www.iscb.org/iscb-latinamerica2016\">Fourth International Society for Computational Biology-Latin America Conference</a>, Buenos Aires, Argentina, November 21-23, 2016. Abstract available <a target=\"_blank\" href=\"https://www.iscb.org/cms_addon/conferences/la2016/posterlist.php\">here</a>.\
  <li><span class=\"hand\">Cárdenas, P.</span>, Tapia, J., Umaña, J.D., Bravo, C., Rengifo Ibáñez, C., Cordovez Álvarez, J. (2016). <i>Optimizing Snakebite Antivenom Distribution in Colombia</i>. Oral presentation at the <a target=\"_blank\" href=\"https://sib.uniandes.edu.co/\">Eighth International Seminar of Biomedical Engineering</a>, Bogotá, April 20-22, 2016. Proceedings <a target=\"_blank\" href=\"https://sib.uniandes.edu.co/images/Memorias_SIB_uniandes_2016.pdf\">here</a>\
  <li>Tapia, J., Bravo, C., Umaña, J.D., <span class=\"hand\">Cárdenas, P.</span> (2015). <i>Algorithm for Antivenom Distribution</i>. Poster at the <a target=\"_blank\" href=\"http://matematicas.uniandes.edu.co/eventos/2015/WD/\">Second International & Interdisciplinary Workshop on Mathematical Modeling, Ecology, Evolution and Dynamics of Dengue and Related Diseases (IIWEE)</a>, Villa de Leyva, August 31–September 4, 2015. Workshop program available <a target=\"_blank\" href=\"https://cloud.sagemath.com/#projects/d4953818-6ac5-4aca-beec-babc8a83dc50/files/1_Program.pdf\">here</a>.\
  <li>Ochoa Cruz, E. A., Shome, S., <span class=\"hand\">Cárdenas, P.</span>, Yelleswarapu, M., Kumar Gupta, J., Battaglia, E.M., Ngom, A., Fernandez, P., & Moe-Behrens, G. (2015). Bioinformatics for Aspiring Synthetic Biologists. <i>Biocoder</i>(7). O’Reilly Media. Available <a target=\"_blank\" href=\"http://www.oreilly.com/biocoder/issues/BioCoderSpring2015.pdf\">here</a>.\
  <li><span class=\"hand\">Cárdenas, P.</span>, Yelleswarapu, M., Shome, S., Kumar Gupta, J., Battaglia, E.M., Fernandez, P., Ngom, A., & Moe-Behrens, G. (2014). Leukippos: a synthetic biology lab in the cloud. <i>Biocoder</i>(4). O’Reilly Media. Available <a target=\"_blank\" href=\"http://chimera.labs.oreilly.com/books/1234000002036/ch03.html\">here</a>.\
  <li>Attended the 2014 iGEM Giant Jamboree (Boston, Oct. 30-Nov. 3); co-presented Team Colombia’s <a target=\"_blank\" href=\"http://2014.igem.org/Team:Colombia\">project</a>.\
  <li><span class=\"hand\">Cárdenas, P.</span>, Shome, S., Fernandes, P., Moe-Behrens, G., & Ngom, A. (2013). <i>SynBio App Selector: An Application Selection Engine for Synthetic Biology</i>. Poster at the 5th International Workshop on Bio-Design Automation, London, 12-13 June 2013. Proceedings available <a target=\"_blank\" href=\"http://www.iwbdaconf.org/2013/proceedings/IWBDA13_Proceedings.pdf\">here</a>.\
  <li>Shome, S., <span class=\"hand\">Cárdenas, P.</span>, Fernandes, P., Ngom, A., & Moe-Behrens, G. (2013). <i>SynBrick: A Crowdsourcing Game for Synthetic Biology</i>. Poster at the 5th International Workshop on Bio-Design Automation, London, 12-13 June 2013. Proceedings available <a target=\"_blank\" href=\"http://www.iwbdaconf.org/2013/proceedings/IWBDA13_Proceedings.pdf\">here</a>.\
  </ul> \
</div>";

var cont_art = "<div id=\"Art\" class=\"text\">\
  <span class=\"largerTxt\"><h1>Art</h1></span>\
  <p>\
    <b><i><span class=\"hand\"><a target=\"_blank\" href=\"http://pablocarderam.github.io/close-open/\">window.close() || window.open()</a></i></b></span><br> (2015). <b>Videogame-essay</b> on the role of art in the Internet age. Source code <a target=\"_blank\" href=\"https://github.com/pablocarderam/close-open\">on Github</a>.\
  </p>\
  <a target=\"_blank\" href=\"http://pablocarderam.github.io/close-open/\"><img alt=\"window.close()||window.open()\" width=\"400px\" src=\"assets/img/window.png\"></a>\
  <br><br>\
\
  <p>\
    <b><i><span class=\"hand\"><a target=\"_blank\" href=\"http://revistaando.tumblr.com/post/109430780560/sobre-el-dibujo-por-pablo-c%C3%A1rdenas-parte-1#_=_\">Sketches of Spain</a></i></b></span><br> (2015). <b>Pencil-drawn portrait series</b> with accompanying <b>essay on the nature of drawing</b> published by <i>Ando</i> online magazine.\
  </p>\
  <a target=\"_blank\" href=\"http://revistaando.tumblr.com/post/109430780560/sobre-el-dibujo-por-pablo-c%C3%A1rdenas-parte-1#_=_\"><img alt=\"Sketches of Spain\" width=\"400px\" src=\"assets/img/spain.png\"></a>\
  <br><br>\
\
  <p>\
    <b><i><span class=\"hand\"><a target=\"_blank\" href=\"http://pablocarderam.github.io/Jack/\">Jack, the Motivational Unicorn</a></i></b></span><br> (Spanish). (2014). Feel the rainbows. Made with <a target=\"_blank\" href=\"http://www.valeriamontana.net/\">Valeria Montaña</a> and a bunch of other people during the <a target=\"_blank\" href=\"http://bogota.sciencehackday.org/\">Bogotá Science Hack Day</a>. Source code <a target=\"_blank\" href=\"https://github.com/pablocarderam/Jack\">on Github</a>, for what it's worth...\
  </p>\
  <a target=\"_blank\" href=\"http://pablocarderam.github.io/Jack/\"><img alt=\"Jack\" width=\"400px\" src=\"assets/img/jack.png\"></a>\
  <br><br>\
\
  <p>\
    <b><i><span class=\"hand\"><a target=\"_blank\" href=\"http://revistaelparcero.com/la-ciudad-cree-artista/\">The City Thinks I'm an Artist</a></i></b></span><br> (Spanish). (2014). Short comic published by <i>El Parcero</i> online magazine.\
  </p>\
  <a target=\"_blank\" href=\"http://revistaelparcero.com/la-ciudad-cree-artista/\"><img alt=\"La ciudad me cree artista\" width=\"400px\" src=\"assets/img/ciudad.png\"></a>\
</div>";

var cont_code = "<div id=\"Code\" class=\"text\">\
  <span class=\"largerTxt\"><h1>Code</h1></span>\
  <ul>\
    <li><b><i><span class=\"hand\"><a target=\"_blank\" href=\"https://www.youtube.com/watch?v=kJN0PWXCq1Y\">Cheating The Cheaters</a></i></b></span>. (2017). <b>3D simulation of a biofilm</b> used to study spatial dynamics and emerging behaviors in antibiotic resistance, developed at <a href=\"https://mtbi.asu.edu/\">MTBI-ASU</a>. Source code <a target=\"_blank\" href=\"https://github.com/bacteriaboyz/CheatingTheCheaters\">on Github</a>.\
    <li><b><i><span class=\"hand\"><a target=\"_blank\" href=\"http://genetargeter.herokuapp.com/\">GeneTargeter</a></i></b></span>. (2016). <b>Computational DNA design</b> tool that automates the design of DNA constructs used to introduce synthetic gene regulation elements into Plasmodium falciparum as used in the Niles Lab at MIT. Source code <a target=\"_blank\" href=\"https://github.com/pablocarderam/genetargeter\">on Github</a>.\
    <li><b><i><span class=\"hand\">Spatial Evolution Model</i></b></span>. (2016). <b>Spatially explicit simulation</b> studying the evolution of antibiotic resistance from a group selection point of view as an emerging behavior from spatial dynamics. Developed with the help of Juan Sebastián Andrade, Laura Forero, and Andrea Velásquez. Source code <a target=\"_blank\" href=\"https://github.com/pablocarderam/BacterialResistance\">on Github</a>.\
    <li><b><i><span class=\"hand\"><a target=\"_blank\" href=\"http://pablocarderam.github.io/CompetitiveLotkaVolterra/\">Lotka-Volterra Simulator</a></i></b></span>. (2016). <b>Visualizes competitive Lotka-Volterra dynamics</b> between two species using a fourth-order Runge-Kutta algorithm. Source available <a target=\"_blank\" href=\"https://github.com/pablocarderam/CompetitiveLotkaVolterra\">on Github</a>.\
    <li><b><i><span class=\"hand\">Wadjet</i></b></span>. (2015) <b>Predictive epidemiological model</b> used to forecast the number of snakebites in each department in Colombia, as well as the number and cost of the antivenom doses needed to cover them. Developed with the help of Lucía Pérez Herrera, Camilo Pérez Martínez, Luisa Vargas Daza and Sara Nieto Díaz. R/Java source code available <a target=\"_blank\" href=\"https://github.com/pablocarderam/Wadjet\">on Github</a>.\
    <li><b><i><span class=\"hand\">Muscle Model</i></b></span>. (2015). <b>Stochastic model</b> of skeletal muscle force dynamics. Source available <a target=\"_blank\" href=\"https://github.com/pablocarderam/MuscleModel\">on Github</a>.\
    <li><b><i><span class=\"hand\"><a target=\"_blank\" href=\"http://pablocarderam.pancakeapps.com/PetriPage/main.html\">PetriPage</a></i></b></span>. (2014). <b>Online evolution simulator</b> intended as an <i>in silico</i> exploration of the evolution of antibiotic resistance evolution. Source code <a target=\"_blank\" href=\"https://github.com/pablocarderam/PetriPage\">on Github</a>.\
    <li><b><i><span class=\"hand\">Hookworm Energy Model</i></b></span>. (2014). <b>Simple stochastic simulation</b> of host energy loss due to <i>Ancylostoma duodenale</i> infection. Developed with Maria Alejandra Galeano, Laura Mejía and Santiago Mesa. Source code available <a target=\"_blank\" href=\"https://github.com/pablocarderam/HookwormEnergyModel\">on Github</a>.\
    <li><b><i><span class=\"hand\"><a target=\"_blank\" href=\"http://pablocarderam.pancakeapps.com/Biopensumdinamico/main.html\">BioPensum</a></i></b></span>. (2013). <b>Simple web app</b> designed to help Universidad de Los Andes students majoring in biology and/or microbiology plan the courses they take to achieve graduation. Source <a target=\"_blank\" href=\"https://github.com/pablocarderam/BioPensum\"> on Github</a>.\
    <li><b><i><span class=\"hand\"><a target=\"_blank\" href=\"http://pablocarderam.pancakeapps.com/AppSelector-Fork1/main.html\">SynBio App Selector</a></i></b></span>. (2013). <b>Prototype</b> of interactive resource base of synthetic biology-related software. Designed with the Leukippos Institute. Source code <a target=\"_blank\" href=\"https://github.com/LeukipposInstitute/Leukippos-SynBioAppSelector\">on Github</a>.\
  </ul>\
</div>";

var cont_writing = "<div id=\"Writing\" class=\"text\">\
  <span class=\"largerTxt\"><h1>Writing</h1></span>\
  <ul>\
    <li><i>Open science and translational research</i>. (2013). An excessively lengthy argument stating that science must be democratized in order to close the translational gap between basic research and public benefit, complete with cases studies and field work. Available in Spanish <a target=\"_blank\" href=\"http://cienciaabierta.pancakeapps.com/\">here</a>.\
  </ul>\
</div>";

var section_contents = [cont_art,cont_code,cont_music,cont_science,cont_writing];
var section_titles = ["Art","Code","Music","Science","Writing"];
