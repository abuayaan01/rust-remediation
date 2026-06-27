import { useRef, useState } from "react";
import { flushSync } from "react-dom";

export default function CatFriends3() {
  const [index, setIndex] = useState(0);
  const nodeRef = useRef(null);

  function scrollToNext() {
    flushSync(() => {
      setIndex((index + 1) % catList.length);
    });
    nodeRef.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  return (
    <>
      <nav>
        <button onClick={scrollToNext}>Next</button>
      </nav>
      <div>
        <ul className="flex gap-10 overflow-scroll">
          {catList.map((cat, i) => (
            <li
              className="min-w-50"
              key={cat.id}
              ref={index === i ? nodeRef : null}
            >
              <img
                className={index === i ? "border-2 p-2 border-blue-500" : ""}
                src={cat.imageUrl}
                alt={"Cat #" + cat.id}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

const catCount = 10;
const catList = new Array(catCount);
for (let i = 0; i < catCount; i++) {
  const bucket = Math.floor(Math.random() * catCount) % 2;
  let imageUrl = "";
  switch (bucket) {
    case 0: {
      imageUrl = "https://placecats.com/neo/250/200";
      break;
    }
    case 1: {
      imageUrl = "https://placecats.com/millie/250/200";
      break;
    }
    case 2:
    default: {
      imageUrl = "https://placecats.com/bella/250/200";
      break;
    }
  }
  catList[i] = {
    id: i,
    imageUrl,
  };
}
