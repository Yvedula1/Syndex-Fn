import DiscoverCarousel from "../../components/dash/Carousel";
const sampleData = [
  {
    cover:
      "https://static01.nyt.com/images/2024/04/23/multimedia/23mideast-crisis-header-wtcl/23mideast-crisis-header-wtcl-threeByTwoSmallAt2X.jpg",
    description: `    Middle East Crisis: Israel Will Expand Civilian ‘Safe Zone’ if It Invades Crowded Gazan City, Official Says
    Cooking at a makeshift shelter in Rafah this month.

    Trapped and Starving, 2 Families in Gaza Try to Keep Their Children Alive

    Russian Court Orders American Journalist to Stay in Prison`,
    category: "World",
  },
  {
    cover:
      "https://static01.nyt.com/images/2024/04/23/multimedia/23nat-torture-lawsuit-01-flbj/23nat-torture-lawsuit-01-flbj-threeByTwoSmallAt2X.jpg",
    description: `    20 Years Later, a Jury Weighs Claims of Abuse at Abu Ghraib
    “I had no control over what was happening to me, or what would happen to me,” Salah Al-Ejaili, a former detainee at the Abu Ghraib prison, told jurors last week.

    These Voters Haven’t Missed an Election in at Least 50 Years

    Woman Charged With Murder After Driving Into a Party, Killing 2 Children`,
    category: "Us",
  },
  {
    cover:
      "https://static01.nyt.com/images/2024/04/23/multimedia/23dc-Nassar-cvhm/23dc-Nassar-cvhm-threeByTwoSmallAt2X.jpg",
    description: `Justice Dept. Reaches $138.7 Million Settlement Over F.B.I.'s Failures in Nassar Case 
      From left, Simone Biles, McKayla Maroney, Aly Raisman and Maggie Nichols. The four U.S. Olympic athletes testified during a Senate Judiciary hearing in September 2021.
To Justify His Immunity Defense, Trump Flips the Prosecution Script
Planned Parenthood Plans $10 Million Boost for Democrats in North Carolina
      `,
    category: "politics",
  },
  {
    cover:
      "https://static01.nyt.com/images/2024/04/22/multimedia/00mastro-hfo-bwqv/00mastro-hfo-bwqv-threeByTwoSmallAt2X.jpg",
    description: `Adams Defends His Pick for Top Lawyer Despite City Council Opposition     Adams Defends His Pick for Top Lawyer Despite City Council Opposition
    Randy Mastro has represented numerous well-known clients, including Chris Christie when he faced an investigation in 2014 over the closure of George Washington Bridge lanes.

    Inside the Week That Shook Columbia University

    Could Trump Go to Prison? If He Does, the Secret Service Goes, Too`,
    category: "nyregion",
  },
];

function Discover() {

  return (
    <div className="min-h-[100em] pl-[5em] lg:pl-[8em] py-12   pr-8 lg:pr-[20em] pt-[5em]">
      <div className="">
        <DiscoverCarousel/>
        <h1 className="text-4xl font-semibold mt-8">Explore</h1>
        <div className="mt-2 grid grid-cols-2 lg:grid-cols-4 gap-2 w-full">
          {[...sampleData, ...sampleData.reverse()].map(
            ({ cover, description, category }) => {
              return (
                <div className="">
                  <h1 className="font-semibold text-xl ">{category}</h1>
                  <div className="hover:shadow-[4px_4px_30px_#00000c38] pb-4 rounded-xl">
                    <img src={cover} className="rounded-lg" alt="" />
                    <p className="line-clamp-4 px-4">{description}</p>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
}

export default Discover;
