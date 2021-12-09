/* global d3*/
/* global Stickyfill*/
/* global jQuery*/
/* global enterView*/

const yearlyDataFlat = [
  {"year": "1960", "tag": "win", "tooltipText": "<strong> 5 September 1960 </strong> <br> v Zbigniew Pietrzykowski: W-RD5 <br> <br> In the Rome Olympics light-heavyweight division, before turning professional, Clay beat the Pole to win gold for the USA."},
  {"year": "1960", "tag": "win", "tooltipText": "29 October 1960 v Tunney Hunsaker: W-6 In his first professional fight Clay, aged 18, left Hunsaker, the 30-year-old police chief of Fayetteville, West Virginia, bloodied and bowed."},
  {"year": "1961", "tag": "win", "tooltipText": "27 December 1960 v Herb Siler: KO-4 With Angelo Dundee in his corner for the first time Clay saw off Siler, who was also starting his career, at Miami Beach, Florida."},  
  {"year": "1961", "tag": "win", "tooltipText": "17 January 1961 v Anthony Esperti: TKO-3 The infamous Miami Beach heavyweight Esperti had not fought in six years and was no match for Clay’s virtuosity."},  
  {"year": "1961", "tag": "win", "tooltipText": "7 February 1961 v Jimmy Robinson: KO-1 It took Clay less than 94 seconds to dispatch Robinson, who was a late substitute for Willie Gullatt in this would-be eight-rounder in Miami Beach."},  
  {"year": "1961", "tag": "win", "tooltipText": "21 February 1961 v Donnie Fleeman: TKO-7 The light-heavyweight Fleeman represented a tougher proposition for Clay at Miami Beach, Florida. But Clay came out on top when he won by technical knock-out in the seventh round."},  
  {"year": "1961", "tag": "win", "tooltipText": "19 April 1961 v LaMar Clark: KO-2 In his first attempt to predict the round of victory Clay was spot on as he proved too powerful for Clark, the former Inter-Mountain AAU heavyweight champion who had won all of his previous 40 fights by knock-out."},  
  {"year": "1961", "tag": "win", "tooltipText": "26 June 1961 v Duke Sabedong: W-1 A unanimous points win for Clay on his first appearance in Las Vegas, where the promotional antics of the wrestler Gorgeous George Wagner left a lasting impression on him."},  
  {"year": "1961", "tag": "win", "tooltipText": "W22 July 1961 v Alonzo Johnson: W-10 After a slow start Clay did enough to achieve a unanimous verdict against Johnson."},  
  {"year": "1961", "tag": "win", "tooltipText": "7 October 1961 v Alex Miteff: TKO-6 Back in Louisville, Clay was initially troubled by an opponent weighing 22lb more before seeing off Miteff with a flurry of punches."},  
  {"year": "1962", "tag": "win", "tooltipText": "29 November 1961 v Willi Besmanoff: TKO-7 Again on home ground against a heavier opponent Clay had too much speed for Besmanoff, cutting him round an eye before putting him down twice in the seventh round."},
  {"year": "1962", "tag": "win", "tooltipText": "10 February 1962 v Sonny Banks: TKO-4 At Madison Square Garden Banks became the first opponent to knock down Clay for a mandatory count. But after that first-round embarrassment Clay was dominant ."},
  {"year": "1962", "tag": "win", "tooltipText": "28 March 1962 v Don Warner: TKO-4 The winner predicted victory in the fifth but was a round early because, he claimed, Warner 'wouldn't shake my hand and that made me mad'."},
  {"year": "1962", "tag": "win", "tooltipText": "23 April 1962 v George Logan: TKO-4 In his first fight in LA Clay pummelled Logan, whose corner threw the towel in after four rounds."},
  {"year": "1962", "tag": "win", "tooltipText": "19 May 1962 Billy Daniels: TKO-7 Against another promising hitherto unbeaten heavyweight Clay opened up a nasty cut over Daniels's left eye, eventually causing the referee to stop the fight in New York."},
  {"year": "1962", "tag": "win", "tooltipText": "20 July 1962 v Alejandro Lavorante: KO-5 Predicting a fifth‑round finish against Lavorante in LA, Clay was as good as his word."},
  {"year": "1963", "tag": "win", "tooltipText": "24 January 1963 v Charlie Powell: KO-3 In Pittsburgh Powell, who had previously beaten the No2 ranked heavyweight Nino Valdes of Cuba, was no match for Clay"},
  {"year": "1963", "tag": "win", "tooltipText": "13 March 1963 v Doug Jones: W-10 The unanimous verdict has been a source of controversy, with many believing Clay was given a gift decision after 10 arduous rounds."},
  {"year": "1963", "tag": "win", "tooltipText": "25 February 1964 v Sonny Liston: TKO-7 In his final fight as Cassius Clay the 22-year-old challenger won the world title for the first time. Clay landed powerful combinations in the sixth round; Liston did not come out for the seventh citing a shoulder injury."},
  {"year": "1964", "tag": "win", "tooltipText": "25 May 1965 v Sonny Liston: KO-1 Due to the sudden ending of their previous bout, a rematch was ordered by the World Boxing Council. It was – controversially – all over with barely two minutes gone after Ali caught Liston with a fast right and his opponent went down."},
  {"year": "1965", "tag": "win", "tooltipText": "22 November 1965 v Floyd Patterson: TKO-12 This was a grudge match with Patterson determined to regain the title against the young upstart. But Patterson, fighting with a bad back, was down in the fifth round and was taking so much punishment by the 12th that the referee stopped the fight and Ali was pronounced winner."},
  {"year": "1965", "tag": "win", "tooltipText": "21 May 1966 v Henry Cooper: TKO-6 In the rematch Cooper's vulnerable eyes again proved pivotal as Ali opened up a serious cut in the sixth and the fight was stopped."},
  {"year": "1966", "tag": "win", "tooltipText": "6 August 1966 v Brian London: KO-3 The Hartlepool-born former British and Commonwealth heavyweight champion London was backed into the corner in the third round and succumbed to a salvo of punches."},
  {"year": "1966", "tag": "win", "tooltipText": "10 September 1966 v Karl Mildenberger: TKO-12 The European heavyweight was the first southpaw to fight for the world title but his style made little impression on Ali, who knocked him down three times before the referee intervened in the 12th round to end the punishment."},
  {"year": "1966", "tag": "win", "tooltipText": "14 November 1966 v Cleveland Williams: TKO-3 With the Ali shuffle making its debut, Williams failed to land a blow and was dispatched in the third round."},
  {"year": "1966", "tag": "win", "tooltipText": "6 February 1967 v Ernie Terrell: W-15 He regained the World Boxing Association title, which had been taken from him for refusing a military induction, with a dominant display against the holder Terrell, who had angered Ali by calling him Cassius Clay."},
  {"year": "1966", "tag": "win", "tooltipText": "22 March 1967 v Zora Folley: KO-7 Folley, a respected heavyweight boxer, was past his best by the time he faced Ali and a couple of solid rights in the seventh was all Ali needed."},
  {"year": "1967", "tag": "win", "tooltipText": "26 October 1970 v Jerry Quarry: TKO-3 This meeting was Ali’s first fight for 3½ years after his boxing ban for refusing the draft. Following two closely fought rounds, Ali cut Quarry above his left eye, which proved conclusive."},
  {"year": "1967", "tag": "win", "tooltipText": "7 December 1970 v Oscar Bonavena: TKO-15 The second bout of his comeback was a tougher affair against the obdurate Bonavena, who absorbed 14 rounds of punishment before being sent to the floor three times in the 15th."},
  {"year": "1970", "tag": "win", "tooltipText": "Win agains ..."},
  {"year": "1970", "tag": "win", "tooltipText": "Win agains ..."},
  {"year": "1971", "tag": "win", "tooltipText": "Win agains ..."},
  {"year": "1971", "tag": "win", "tooltipText": "26 December 1971 v Jürgen Blin: KO-7 Against the former heavyweight champion of Germany in Zurich, Ali cut Blin over both eyes before catching him with a decisive right in the seventh."},
  {"year": "1971", "tag": "win", "tooltipText": "26 July 1971 v Jimmy Ellis: TKO-12 Against his some-time sparring partner Ellis – they had grown up together in Louisville – Ali proved stronger and faster but dragged the match out to the 12th round when he called for the match to be ended, so his friend would not be hurt any more."},
  {"year": "1971", "tag": "loss", "tooltipText": "8 March 1971 v Joe Frazier: Lost-15 With both fighters unbeaten something had to give and it was Ali who did so in the final round when Frazier floored him, for only the third time in his career, with a fierce left hook. Ali regained composure but Frazier won the fight on a unanimous decision to end his opponent's 31-fight winning record."},
  {"year": "1972", "tag": "win", "tooltipText": "17 November 1971 v Buster Mathis: W-12 A previous contender for the world title, Mathis came out of retirement to fight Ali. The former champion eventually won on points after knocking Mathis down twice in each of the last two rounds."},
  {"year": "1972", "tag": "win", "tooltipText": "Win agains ..."},
  {"year": "1972", "tag": "win", "tooltipText": "Win agains ..."},
  {"year": "1972", "tag": "win", "tooltipText": "Win agains ..."},
  {"year": "1972", "tag": "win", "tooltipText": "14 February 1973 v Joe Bugner: W-12 After securing a narrow win over Britain's European heavyweight champion Ali later declared that Bugner could be world champion if he carried on boxing as well as he had."},
  {"year": "1972", "tag": "win", "tooltipText": "31 March 1973 v Ken Norton: L-12 For only the second time in his career Ali tasted defeat – and had his jaw broken in the 11th round – as Norton took the National American Boxing Federation title, in the first of their three fights, on a split decision."},
  {"year": "1973", "tag": "win", "tooltipText": "10 September 1973 v Ken Norton: W-12 In the first rematch six months later Ali came out on top – also on a split decision – after some furious exchanges between the pair during the fight."},
  {"year": "1973", "tag": "win", "tooltipText": "20 October 1973 v Rudie Lubbers: W-12 The Dutch champion, Lubbers, absorbed a lot of punishment but Ali could not nail his man. He won on a unanimous decision but his display raised serious doubts about his chances of being able to beat the world champion George Foreman to regain the title."},
  {"year": "1973", "tag": "win", "tooltipText": "28 January 1974 v Joe Frazier: W-12 The filling in the sandwich between the Fight of the Century and the Thrilla in Manila hardly whetted the appetite. Ali stayed out of trouble and Frazier failed to get under his arms as he had in the first fight at Madison Square Garden, complaining that Ali was holding in the clinches. Frazier was rocked by a straight right in the second round but neither could land a decisive blow and Ali received a unanimous points verdict."},
  {"year": "1973", "tag": "loss", "tooltipText": "31 March 1973 v Ken Norton: L-12 For only the second time in his career Ali tasted defeat – and had his jaw broken in the 11th round – as Norton took the National American Boxing Federation title, in the first of their three fights, on a split decision."},
  {"year": "1974", "tag": "win", "tooltipText": "30 October 1974 v George Foreman: KO-8 The Rumble in the Jungle ended in pandemonium as Ali, having absorbed the best of Foreman's punches, floored the champion with a left-right combination to regain the world title against the odds."},
  {"year": "1974", "tag": "win", "tooltipText": "24 March 1975 v Chuck Wepner: TKO-15 After Ali had easily outfought Wepner in the first eight rounds the title challenger had the temerity to knock Ali down in the ninth. Ali responded devastatingly. He opened cuts above both of Wepner’s eyes and broke his nose before ending the fight shortly before the final bell."},
  {"year": "1975", "tag": "win", "tooltipText": "6 May 1975 v Ron Lyle: TKO-11 In the opening rounds, Ali did not fight aggressively unlike Lyle, instead conserving his energy for later rounds. In the 11th Ali produced a series of punches that Lyle could not cope with, forcing the referee to call a halt."},
  {"year": "1975", "tag": "win", "tooltipText": "30 June 1975 v Joe Bugner: W-15 The second fight between the pair was a one-sided affair, although Bugner managed to hold on for the full 15 rounds before Ali was given a unanimous points victory."},
  {"year": "1975", "tag": "win", "tooltipText": "1 October 1975 v Joe Frazier: TKO-14 The third and final meeting between Ali and Frazier, The Thrilla in Manila, was fought at full throttle despite high heat. Ali was better in the earlier rounds, whereas Frazier scored higher in the middle rounds. From the 10th onwards Ali dominated and knocked Frazier down in the 14th."},
  {"year": "1975", "tag": "win", "tooltipText": "20 February 1976 v Jean Pierre Coopman: KO-5 Ali's bout against the Belgian boxer is often regarded as a glorified sparring session. It is said that after the fight with Frazier Ali wanted an easy opponent and Coopman duly obliged, being knocked out in the fifth round."},
  {"year": "1976", "tag": "win", "tooltipText": "30 April 1976 v Jimmy Young: W-15 By now Ali had become slow and tired, whereas Young displayed pace and stamina to go the whole 15 rounds. But Young also ducked out of the ropes several times to avoid his opponent and at one point the referee called a knock down and started the count. But Ali had too much skill and retained the title on a unanimous decision."},
  {"year": "1976", "tag": "win", "tooltipText": "24 May 1976 v Richard Dunn: TKO-5 In Munich Richard Dunn, who had recently won the European title, was out of his depth. He was knocked out three times in the fourth round and dispatched in the fifth. Dunn was the last boxer that Ali knocked out."},
  {"year": "1976", "tag": "win", "tooltipText": "28 September 1976 v Ken Norton: W-15 The third meeting between the two was one of the most evenly fought matches in Ali’s career. Far from 'knocking the sucker out inside five rounds', Ali was taken the distance at New York's Yankee Stadium. The scorecards were even for both boxers going into the last round but Ali was scored higher by both the judges and the referee for the final three minutes and retained the title."},
  {"year": "1976", "tag": "win", "tooltipText": "16 May 1977 v Alfredo Evangelista: W-15 Evangelista, a Uruguayan-Spanish boxer, challenged Ali for his title but lost by unanimous decision in the 15th."},
  {"year": "1977", "tag": "win", "tooltipText": "29 September 1977 v Earnie Shavers: W-15 The theme to Star Wars accompanied Ali's entrance to the ring at Madison Square Garden for this bout between two boxers seen as past their peak. Ali and Shavers fought ferociously enough to pick off separate rounds, yet in the 15th Ali did enough to secure a unanimous decision."},
  {"year": "1977", "tag": "win", "tooltipText": "15 September 1978 Leon Spinks: W-15 Ali exacted swift revenge on Spinks to regain the title. Ali was always in control at the Superdome in New Orleans, where the 63,350 was the largest indoor attendance for a boxing match, and won a unanimous decision to become the first boxer to win the world title three times."},
  {"year": "1978", "tag": "win", "tooltipText": "15 February 1978 v Leon Spinks: L-15 Ali had expected an easy fight against Spinks but was surprisingly outmanoeuvred by his opponent who won on points. It was only Spinks's eighth professional fight, and it was the fastest rise of a boxer to become world heavyweight champion in the sport's history."},
  {"year": "1979", "tag": "loss", "tooltipText": "15 September 1978 Leon Spinks: W-15 Ali exacted swift revenge on Spinks to regain the title. Ali was always in control at the Superdome in New Orleans, where the 63,350 was the largest indoor attendance for a boxing match, and won a unanimous decision to become the first boxer to win the world title three times."},
  {"year": "1980", "tag": "loss", "tooltipText": "2 October 1980 v Larry Holmes: L - TKO - 10 After a short-lived retirement Ali found himself back in the ring against the new world champion. It was a heartbreaking encounter. Holmes battered the 38-year-old Ali and he lost the match by knock out in the 11th round."},
  {"year": "1981", "tag": "loss", "tooltipText": "11 December 1981 v Trevor Berbick: L-10 The career that began with such a thrilling bang ended in anticlimax against Berbick. After seven quite even rounds, Berbick dominated the last three and ran out the winner on a unanimous verdict."},
];

const container = d3.select('#scrolly-bottom');
const stepSel = container.selectAll('.step');


d3.select("body")
.append("div")
.attr("id", "tooltip")
.style("width", "300px")
.style("height", "125px")
.style("padding", "10px")
.style("position", "absolute")
.style("font-family", "courier")
.style("background-color", "grey")
.style('display', 'none');

function updateChart(index, eventType) {
  const sel = container.select(`[data-index='${index}']`);
  stepSel.classed('is-active', (d, i) => i === index)
  const widthWins = sel.attr('data-wins');
  const widthLosses = sel.attr('data-losses');

  const radius = 8.5;
  const diameter = radius * 2;


  const svg = d3.select('#bubbles');
  svg.selectAll('circle').remove();

  const currentYear = sel.select('h4').html().split("<br>")[0].trim().replace(':', '');   console.log(currentYear)
  if(currentYear != "Formative years" && currentYear != "Early life") {
  let dataset = yearlyDataFlat.filter( d => d.year <= currentYear )
   console.log(dataset)
    

  svg.selectAll('circle')
    .data(dataset)
    .enter()
    .append('circle')
      .attr('r', radius)
      // .attr('cx', (d,i) => (i + 1.5) * diameter) // widthW * 20 is width of blue bubbles
      .attr("cx", function(d, i) { return i * 17 + 25; })
      .attr('cy', 20)
      .attr('fill', (d) => d.tag === 'win' ? '#DAA520' : '#AB381F')    
      .attr('stroke', (d) => d.tag === 'win' ? '#FF8C00' : '#d6342b' )
      .attr('stroke-width', (d) => d.tag === 'win' ? '3px' : '3px')
      .on('mouseenter', function(d) { 
        
        // .attr("cx", function(d, i) { return i * 100 + 30; })

    let pos = d3.select(this).node().getBoundingClientRect();
    
      d3.select('#tooltip')
        .style('display', 'block')
        .style('position', 'absolute')
        .style('left', `${pos['x']}px`)
        .style('top', `${(window.pageYOffset  + pos['y'] - 130)}px`)         
        .html(d.tooltipText);


// tooltip.html(d)  
//   .style("left", d3.select(this).attr("cx") + "px")     
//   .style("top", d3.select(this).attr("cy") + "px");

        }).on('mouseout', () => {
            d3.select('#tooltip')
              .style('display', 'none')
        })
  }
}

  function init() {
  Stickyfill.add(d3.select('.sticky').node());


  enterView({
    selector: stepSel.nodes(),
    offset: 0.5,
    enter: el => {
      const index = +d3.select(el).attr('data-index');
      console.log('enter')
      updateChart(index, "enter");
    },

    exit: el => {
      let index = +d3.select(el).attr('data-index');
      index = Math.max(0, index - 1);
      console.log('exit')
      updateChart(index, "exit");
    } });
}

init();

