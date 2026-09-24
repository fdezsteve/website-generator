import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { menu } from "../data/cafe";

export default function MenuExplorer() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const group = menu[active];
  return (
    <section className="menu-explorer" aria-label="Menu highlights">
      <div className="menu-explorer__copy">
        <div className="category-tabs" role="tablist" aria-label="Menu categories">
          {menu.map((category, i) => (
            <button key={category.id} role="tab" aria-selected={i === active}
              aria-controls="featured-menu" id={"tab-" + category.id} onClick={() => setActive(i)}>
              {category.label}
            </button>
          ))}
        </div>
        <div id="featured-menu" role="tabpanel" aria-labelledby={"tab-" + group.id}>
          <p className="kicker">A few things from {group.label.toLowerCase()}</p>
          {group.items.slice(0,3).map((item) => (
            <div className="menu-line" key={item[0]}>
              <div><strong>{item[0]}</strong><span>{item[1]}</span></div><span className="price">{item[2]}</span>
            </div>
          ))}
        </div>
        <a className="arrow-link" href="/menu">See the full menu <span>↗</span></a>
      </div>
      <div className="menu-explorer__visual" aria-live="polite">
        <AnimatePresence mode="wait">
          <motion.div key={group.image} className={"photo photo--" + group.image}
            role="img" aria-label={group.label + " food photography placeholder"}
            initial={reduce ? false : {opacity:0, scale:.985}} animate={{opacity:1, scale:1}}
            exit={reduce ? {} : {opacity:0}} transition={{duration: reduce ? 0 : .28}}>
            <span className="photo-label" aria-hidden="true">{group.image}</span>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
