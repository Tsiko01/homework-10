import { useParams, useNavigate } from "react-router-dom";

export default function HobbyDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const hobbies = {
    chess: {
      title: "Playing Chess",
      desc: "ჭადრაკი მიყვარს, რადგან სტრატეგიული თამაშია კარგ მეტოქესთან ყოველთვის მაგარი თამაში გამოდის"
    },
    reading: {
      title: "Reading Book",
      desc: "ჩემი ჰობი არ არის სხვა რა დამეწერა არ ვიცოდი"
    },
    football: {
      title: "Playing Football",
      desc: "ფეხბურთს ძირითადად ჩემს პატარა ძმას ვეთამაშები "
    },
    mma: {
      title: "Fighting MMA",
      desc: "MMA მაინტერესებს და ვვარჯიშობ ძალასა და ტექნიკაზე 🥊"
    },
    ufc: {
      title: "Watching UFC",
      desc: "UFC-ის ყურება მომწონს სხვა არ ვიცი რა დავწერო "
    },
    championsLegue: {
      title: " Champions League",
      desc: "ჩემპიონთა ლიგის თამაშებს ვუყურებ ძირითადად მარტო ქართველებს მიქაუტაძე, კვარა, მამარდას"
    },
    swiming: {
      title: " swiming",
      desc: "მეორე ჩემი საყვარელი სპორტი, 50 მეტრიან აუზს 40 წამში დავცურავ "
    },
    golf: {
      title: "Golf",
      desc: "მარტივი ჩანს მაგრამ ძალიან რთული სპორტია მინიმალისტურ დეტალებზეა დამოკიდებული"
    },
   
  };

  const hobby = hobbies[id];

  return (
    <div>
      <button className="button_1" onClick={() => navigate(-1)}>← Back</button>

      <h1 className="h_1">
        {hobby ? hobby.title : "Not Found"}
      </h1>

      <p className="p_1">
        {hobby ? hobby.desc : "ასეთი ჰობი არ არსებობს"}
      </p>
    </div>
  );
}