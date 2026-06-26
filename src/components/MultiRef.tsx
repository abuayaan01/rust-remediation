import { useRef, useState } from "react";

type ItemRefType = Map<CatListType, HTMLElement>;

export default function CatFriends() {
  const [catList, setCatList] = useState<CatListType[]>(setupCatList);
  const itemRef = useRef<ItemRefType | null>(null);

  function scrollToCat(item:CatListType): void {
    itemRef.current.get(item).scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  function getMap(): ItemRefType {
    if (!itemRef.current) {
      itemRef.current = new Map();
    }

    return itemRef.current;
  }

  return (
    <>
      <nav>
        <button onClick={() => scrollToCat(catList[0])}>Neo</button>
        <button onClick={() => scrollToCat(catList[5])}>Millie</button>
        <button onClick={() => scrollToCat(catList[8])}>Bella</button>
      </nav>
      <div>
        <ul>
          {catList.map((cat) => (
            <li
              ref={(node) => {
                const map = getMap();
                map.set(cat, node);

                return () => {
                  map.delete(cat);
                };
              }}
              key={cat.id}
            >
              <img src={cat.imageUrl} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

interface CatListType {
  id: number;
  imageUrl: string;
}

function setupCatList(): CatListType[] {
  const catCount: number = 10;
  const catList: CatListType[] = new Array(catCount);
  for (let i = 0; i < catCount; i++) {
    let imageUrl = "";
    if (i < 5) {
      imageUrl = "https://placecats.com/neo/320/240";
    } else if (i < 8) {
      imageUrl = "https://placecats.com/millie/320/240";
    } else {
      imageUrl = "https://placecats.com/bella/320/240";
    }
    catList[i] = {
      id: i,
      imageUrl,
    };
  }
  return catList;
}
