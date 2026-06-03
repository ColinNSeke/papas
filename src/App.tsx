import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, observerOptions);

    const revealEls = document.querySelectorAll(".reveal");
    revealEls.forEach((el) => observer.observe(el));

    const handleScroll = () => {
      const nav = document.getElementById("main-nav");
      if (nav) {
        if (window.scrollY > 100) {
          nav.classList.add(
            "bg-[#0a0a0a]/95",
            "backdrop-blur-md",
            "border-b",
            "border-white/5",
          );
        } else {
          nav.classList.remove(
            "bg-[#0a0a0a]/95",
            "backdrop-blur-md",
            "border-b",
            "border-white/5",
          );
        }
      }

      const heroBg = document.getElementById("hero-bg");
      if (heroBg instanceof HTMLElement) {
        heroBg.style.transform = `translateY(${window.pageYOffset * 0.4}px)`;
      }
    };

    const buttons = document.querySelectorAll("button");
    const buttonCleanups: Array<() => void> = [];

    buttons.forEach((btn) => {
      const handleMouseDown = () => {
        btn.style.transform = "scale(0.95)";
      };
      const handleMouseUp = () => {
        btn.style.transform = "scale(1)";
      };

      btn.addEventListener("mousedown", handleMouseDown);
      btn.addEventListener("mouseup", handleMouseUp);
      buttonCleanups.push(() => {
        btn.removeEventListener("mousedown", handleMouseDown);
        btn.removeEventListener("mouseup", handleMouseUp);
      });
    });

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      revealEls.forEach((el) => observer.unobserve(el));
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
      buttonCleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  return (
    <>
      <nav className="fixed top-0 w-full z-[100] transition-all duration-500" id="main-nav">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter py-4 flex justify-between items-center">
      <div className="flex items-center gap-4">
      <img alt="Papa's Döner Logo" className="h-14 w-auto object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbl9jXSNxDJK-8xHY_jrJ5LV95L6pyab5bvX5uua0wkPyw-41sUU7onjxcJypBo788YbqywwVtIpPXHWIZuTRNWDx1obRm5jfRQ1VeR5dWSb_V_Q5AKSw8FA4APac3X1sg8Jfz1cTEVAOs5dYpupZnaCfnK5JBEosIpsK2_ZRef5JX0UZaNmMl_5_ChrXTZPtIi3RV8mY_tPwkiCdFsVgFx9sRXFofEyaZPRPqb7N2g-FjaXDO8lm-r4UIaZTm-KYJLDBP3fRQ6Oo"/>
      <span className="text-headline-md font-headline-md tracking-tighter uppercase hidden sm:block">Papa's Döner</span>
      </div>
      <div className="hidden md:flex gap-10 items-center">
      <a className="text-label-sm font-label-sm hover:text-secondary-fixed transition-colors tracking-widest" href="#story">HISTORY</a>
      <a className="text-label-sm font-label-sm hover:text-secondary-fixed transition-colors tracking-widest" href="#craft">THE CRAFT</a>
      <a className="text-label-sm font-label-sm hover:text-secondary-fixed transition-colors tracking-widest" href="#menu">MENU</a>
      <a className="text-label-sm font-label-sm hover:text-secondary-fixed transition-colors tracking-widest" href="#location">LOCATIONS</a>
      <button className="bg-white text-black px-8 py-3 text-label-sm font-label-sm tracking-widest hover:bg-secondary-container hover:text-white transition-all">RESERVATION</button>
      </div>
      </div>
      </nav>
      
      <header className="relative h-screen min-h-[800px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
      <img alt="The Legend Returns" className="w-full h-full object-cover parallax-bg" id="hero-bg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAL-e4104-PJx9whb2yk2eH4R--esXpNjrJJJkphCcwVO_ovyY6VrWQI-mbw4Z-Bo658oR9UUY3sv1GmTW4lsw2LPAEo_FU2ffeIbR6n-U7L8WLV0ZJkzHA-cVkOHKF1gTmxh4LUCvDRrDdVa-WKR4ppvbvzi7XKjOyqTfGoaKpcqTBc6xSPz74vlOBz8onoeHv_d2V-U-aSiQWgYmmBmdX5PMDsf57YGUSoBd1KJ5TMoPhv_pzaUU0a5VpI6fLMUPagdNBx9KLy90"/>
      <div className="absolute inset-0 hero-overlay"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
      </div>
      <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-gutter w-full">
      <div className="max-w-3xl reveal active">
      <div className="flex items-center gap-4 mb-6">
      <span className="font-label-sm text-label-sm text-secondary uppercase tracking-[0.4em] block">Established 1996</span>
      <div className="h-[1px] w-12 bg-secondary/50"></div>
      <span className="font-label-sm text-label-sm text-white uppercase tracking-[0.4em] block">The Legend Returns 2026</span>
      </div>
      <h1 className="font-display-lg text-[56px] md:text-[88px] leading-[0.95] mb-10 text-shadow-lg">
                      Das Comeback<br/>
      <span className="text-on-surface-variant italic font-normal">der Legende.</span>
      </h1>
      <p className="font-body-lg text-body-lg text-white/80 max-w-lg mb-12 leading-relaxed">
                      Nach drei Jahrzehnten kehrt der Pionier des Stuttgarter Premium-Fleisches zurück. Papa's Döner – wo Geschichte auf die Zukunft der Kulinarik trifft.
                  </p>
      <div className="flex flex-col sm:flex-row gap-6">
      <button className="bg-[#e63946] text-white px-12 py-5 font-label-sm tracking-widest transition-all hover:brightness-110 active:scale-95 uppercase">DIE GESCHICHTE ERLEBEN</button>
      <button className="border border-white/30 text-white px-12 py-5 font-label-sm tracking-widest transition-all hover:bg-white hover:text-black active:scale-95 uppercase">UNSERE PHILOSOPHIE</button>
      </div>
      </div>
      </div>
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
      <span className="text-[10px] tracking-[0.3em] uppercase">Scroll to Discover</span>
      <div className="w-[1px] h-12 bg-gradient-to-b from-white/80 to-transparent"></div>
      </div>
      </header>
      
      <section className="py-section-padding bg-[#0a0a0a]" id="story">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
      <div className="lg:col-span-6 order-2 lg:order-1 relative reveal active">
      <div className="aspect-[4/5] overflow-hidden">
      <img alt="Papa working with passion" className="w-full h-full object-cover transition-all duration-1000 grayscale hover:grayscale-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAL-e4104-PJx9whb2yk2eH4R--esXpNjrJJJkphCcwVO_ovyY6VrWQI-mbw4Z-Bo658oR9UUY3sv1GmTW4lsw2LPAEo_FU2ffeIbR6n-U7L8WLV0ZJkzHA-cVkOHKF1gTmxh4LUCvDRrDdVa-WKR4ppvbvzi7XKjOyqTfGoaKpcqTBc6xSPz74vlOBz8onoeHv_d2V-U-aSiQWgYmmBmdX5PMDsf57YGUSoBd1KJ5TMoPhv_pzaUU0a5VpI6fLMUPagdNBx9KLy90"/>
      </div>
      <div className="absolute -bottom-10 -right-10 bg-secondary-container p-10 hidden md:block border border-white/10">
      <span className="text-display-lg font-display-lg text-white leading-none block mb-2">1996</span>
      <p className="text-label-sm font-label-sm text-white/80 uppercase tracking-widest">In Stuttgart geboren</p>
      </div>
      </div>
      <div className="lg:col-span-6 order-1 lg:order-2 reveal active" style={{ transitionDelay: "200px" }}>
      <span className="font-label-sm text-label-sm text-secondary tracking-[0.3em] mb-4 block uppercase">Die Saga</span>
      <h2 className="font-headline-lg text-headline-lg-mobile md:text-[56px] leading-tight mb-8">Pioniere des Steak-Fleisches</h2>
      <p className="font-body-lg text-body-lg text-on-surface-variant mb-6 leading-relaxed">
                          Gegründet im Jahr 1996 im Herzen von Stuttgart, begann die Reise von Papa's Döner mit einer einfachen, aber revolutionären Idee: Döner-Kultur auf das Niveau der Spitzengastronomie zu heben. 
                      </p>
      <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 leading-relaxed">
                          Als einer der ersten Anbieter von hochwertigem Steak-Fleisch in traditioneller Pita haben wir Standards gesetzt, die bis heute unerreicht sind. Nach einer Ära der Perfektionierung kehrt die Legende 2026 in die Schwaben Galerie zurück – authentischer, hochwertiger und leidenschaftlicher als je zuvor.
                      </p>
      <div className="border-l-2 border-[#e63946] pl-8 py-4 italic text-body-lg text-white bg-white/5">
                          "Wir kehren nicht zurück, um mitzuhalten. Wir kehren zurück, um das Handwerk neu zu definieren, das wir vor 30 Jahren mitbegründet haben."
                      </div>
      </div>
      </div>
      </div>
      </section><section className="py-section-padding bg-surface-container-lowest overflow-hidden" id="steak-secret">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
      <div className="reveal">
      <span className="font-label-sm text-label-sm text-secondary tracking-[0.3em] mb-4 block uppercase">Das Geheimnis</span>
      <h2 className="font-headline-lg text-headline-lg-mobile md:text-[56px] leading-tight mb-8">Premium Hochrippen-Steak</h2>
      <p className="font-body-lg text-body-lg text-on-surface-variant mb-6 leading-relaxed">
                Der Kern unseres Erfolgs liegt in der kompromisslosen Auswahl des Fleisches. Wir verwenden ausschließlich feinstes Hochrippen-Steak (Rib-Eye), das für seine perfekte Marmorierung und Zartheit bekannt ist.
              </p>
      <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 leading-relaxed">
                Nach unserem 30 Jahre alten Familienrezept wird jedes Stück von Hand pariert und in einer geheimen Gewürzmischung mariniert, die über Generationen perfektioniert wurde. Ein Geschmack, der keine Abkürzungen kennt.
              </p>
      <div className="flex items-center gap-6">
      <div className="flex flex-col">
      <span className="text-display-lg font-display-lg text-secondary leading-none">100%</span>
      <span className="text-label-sm uppercase tracking-widest opacity-60">Premium Beef</span>
      </div>
      <div className="w-[1px] h-12 bg-white/10"></div>
      <div className="flex flex-col">
      <span className="text-display-lg font-display-lg text-secondary leading-none">30J</span>
      <span className="text-label-sm uppercase tracking-widest opacity-60">Tradition</span>
      </div>
      </div>
      </div>
      <div className="relative reveal">
      <div className="grid grid-cols-2 gap-4 h-full">
      <div className="aspect-[4/5] overflow-hidden rounded-lg col-span-2">
      <img alt="Premium meat preparation - Close up" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwGpsSBUW1CyLh9hTBuNWZS4TjyMA4dj2QeW59tFXY55Ft54sEj3-UAHwxLOVhyj_V9Pv8Q7RMtjERAZEvRsGFuhU0FE9fAwZWh8NvSw0KbELsKKGO5iJJi_R1Ip6u9f43-u9lbgLNd9cunI4eKjXMOqJ9rbLBilKz7s18UOzb2TayOE6eJNvtcweuPi7rhhFq66GM-GmnuptmanN8Lt6ETXZc5khJkJ8sQmJ_hVFvNCO3UGqtqPVMzpoph1onXX_L7089oUn1zHM"/>
      </div>
      <div className="aspect-square overflow-hidden rounded-lg">
      <img alt="Premium meat preparation - Slicing" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWr45wVuM6V9vbL6Q5JqbCzujoM6P8rDBHgPLmEpkBSkd63luUCAro7AT1FRBuaaIH9d500wHMJNqa8XMVH8FXUaYrlIghJqWPvaoDworr8HcDLErWEhOkkl214Q0UMpNjDjT-bG7gY5G7oLCisRdm1rtloxjwAhmeIySffCfQv611WZv4rTBcIMLYS2hozktrYEowf1b-0TUfrOkYEORYy8MINLxy_ABamCFzLbND4MDa3YlbF0nTRryK5iQVCM7-ebn0d_rHVGM"/>
      </div>
      <div className="aspect-square overflow-hidden rounded-lg">
      <img alt="Premium meat preparation - Detail" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0y98ooO_rtzpoThXlTHbJbNV1UwTm2WlHe9S-83GeY3vjLh9w2zxAy0u9d_u1x3mRS_-JEaXZ4j1IXkZ3xGi6pBVkhDXECWxydS_zY_nVP_iIXVaR58Gb9ndZJeqqs9cq3aCVQElFxQTLa3GwSNXPbVsHexw42QXtgcLG-BmLz9CY79qOl45UZLk45whi2MjyT8stKU-v7AT2t-fe2n7mDeAFXX08xJ646BI7cQnqWmg6Fg35QySzZiFRRZidQLbmnoE85ZYehp8"/>
      </div>
      </div>
      <div className="absolute -bottom-6 -left-6 bg-secondary-container p-8 border border-white/10 z-10">
      <p className="text-white font-headline-md italic">"Qualität ist unser einziges Versprechen."</p>
      </div>
      </div>
      </div>
      </div>
      </section>
      
      <section className="py-section-padding bg-surface-container-lowest overflow-hidden" id="craft">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
      <div className="mb-20 reveal active">
      <span className="font-label-sm text-label-sm text-secondary tracking-[0.3em] mb-4 block uppercase">The Craftsmanship</span>
      <h2 className="font-display-lg text-headline-lg-mobile md:text-headline-lg mb-6">Präzision in jeder Schicht</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
      <div className="reveal active" style={{ transitionDelay: "100px" }}>
      <div className="aspect-square overflow-hidden mb-6 group relative">
      <img alt="The masterpiece pita" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqgpNzWSGXLRLLyzWMLbazXNE1M2bWCzUfISx5Akiv7x-Gkrfz9dzIQpOuFGeTXpvGt4x2fOVWjXP4PIi49EgkP6WEHa9lzrvN0UrDmgTeNOa6qbMkL5MZuNEcwQn7CAWeDq5JZ_XLLrlNEl_8UZ_wj1c1Uj5EJMx5DvBya9wkztA_9XCn0udecgYw_OEkM3RU4_GfuBAQgjwaykhBrL8lDnkoOhop2woTRhcCF-cuYy5tg0DnWzqVJ3I9eHWikY0im-Vhc3DjIxg"/>
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
      </div>
      <h3 className="text-headline-md mb-3">Steak-Meat Perfektion</h3>
      <p className="text-on-surface-variant">Handverlesene Schnitte, mariniert nach dem streng geheimen Familienrezept von 1996.</p>
      </div>
      <div className="reveal active" style={{ transitionDelay: "200px" }}>
      <div className="aspect-square overflow-hidden mb-6 group relative">
      <img alt="Serving the Döner" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVua_-Fl6iRmzLAV4PiebHkxiuPfbJT0s9fg9Y-UA6I9AXTl-3EQHw-io0IiOf2Ezg99Dt1mhWpDTdymAI7ArDh5Ju90YAaCSa-NViVyWZ2HnZtck21TlTHstIBvyM0eqYgLVl6D5lWTDOQqKiLGGBfPjf6-psAH2QEstc9gZcA5Xra61B40-hHpHM4bADzsa1zmiqFGodDXbJ3d3aKMUhN32zEkeusuYTfbcDApt1k8Jk1A3mnRjfTxdObArgC86Y44abTGHoF-w"/>
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
      </div>
      <h3 className="text-headline-md mb-3">Traditionelle Handarbeit</h3>
      <p className="text-on-surface-variant">Jeder Döner wird mit der Erfahrung von über 30 Jahren individuell für Sie komponiert.</p>
      </div>
      <div className="reveal active" style={{ transitionDelay: "300px" }}>
      <div className="aspect-square overflow-hidden mb-6 group relative">
      <img alt="Fresh ingredients" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBiHZojcqm7HAwlmZBaYHdZuUwP9RcA5-o8OnW9PzbLQQCiovuJo5sNYvLGLSmFytwTYNoEChaFHovK2NwRXJCOwwUrl3ojwq6sDNHoYYypEThXaBmWxPK_3SZq_hYwb21qbSZiumqyZVX0KVxinAPhMM54KtY28HQANmkrla-eRkY8ncvwZ7I3SsQ8J6SYe6wEnoamNQKO3s7pf3hY_6G8s4pg0zTbetGLcS9RxQfWpll6PC03Jo7rXGynRC6LvW1AxH02hv0Edmo"/>
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
      </div>
      <h3 className="text-headline-md mb-3">Moderne Frische</h3>
      <p className="text-on-surface-variant">Frische regionale Zutaten treffen auf die legendäre Saucen-Kunst von Papa.</p>
      </div>
      </div>
      </div>
      </section>
      
      <section className="bg-[#0a0a0a] py-section-padding" id="menu">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-white/5 reveal active">
      <div className="relative h-[600px] lg:h-auto overflow-hidden">
      <img alt="Signature Black Beef" className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXMuwk5h0I5BEiE4mXncX40cVM-hwXGQOC3M5_9saJoPV_IenRKNZ090vjHoGMMSVxTRFLVlEpoGF1bG032UbtPun_NkhOj4etsMj5pnimqDcQnq4Z1yKM1pqjjZKkdKoKxwm-th2tU4kQh6N0Z75P2h1FqdxiFdQe34UkDRGI3bpjkyPV49Wiro8NYpOKeICa2PZ2LzA_lNtZMZkQRZnUUo5fBeLqyI3KfGapsFAeG50iFpYpceRWpZyqs_-kYRFw3nI7jVNS7D4"/>
      <div className="absolute top-8 left-8 vintage-badge text-black px-6 py-2 font-label-sm text-xs tracking-widest uppercase">Signature 1996</div>
      </div>
      <div className="p-12 md:p-24 flex flex-col justify-center bg-surface-container-low">
      <span className="font-label-sm text-label-sm text-secondary tracking-widest mb-4 block">EXKLUSIVE AUSWAHL</span>
      <h2 className="font-headline-lg text-[48px] mb-12">Signature Menu</h2>
      <ul className="space-y-10">
      <li className="group">
      <div className="flex items-end justify-between mb-2">
      <span className="font-headline-md text-headline-md group-hover:text-secondary transition-colors">Original Pita 1996</span>
      <div className="dotted-leader mb-2"></div>
      <span className="font-label-sm text-label-sm text-secondary">9.50€</span>
      </div>
      <p className="text-on-surface-variant text-sm">Das Original: Premium Steak-Fleisch, Papa's Spezial-Sauce, klassischer Salatmix.</p>
      </li>
      <li className="group">
      <div className="flex items-end justify-between mb-2">
      <span className="font-headline-md text-headline-md group-hover:text-secondary transition-colors">Black Beef Deluxe</span>
      <div className="dotted-leader mb-2"></div>
      <span className="font-label-sm text-label-sm text-secondary">13.90€</span>
      </div>
      <p className="text-on-surface-variant text-sm">Zartestes Rindfleisch, Trüffel-Infusion, Rucola und karamellisierte Zwiebeln.</p>
      </li>
      <li className="group">
      <div className="flex items-end justify-between mb-2">
      <span className="font-headline-md text-headline-md group-hover:text-secondary transition-colors">Heritage Choice</span>
      <div className="dotted-leader mb-2"></div>
      <span className="font-label-sm text-label-sm text-secondary">10.50€</span>
      </div>
      <p className="text-on-surface-variant text-sm">Vollkorn-Variante mit hausgemachtem Seitan und Cashew-Creme.</p>
      </li>
      </ul>
      <button className="mt-16 w-full md:w-fit bg-[#e63946] text-white px-16 py-5 font-label-sm tracking-widest transition-all hover:scale-105 uppercase">KOMPLETTE KARTE</button>
      </div>
      </div>
      </div>
      </section>
      
      <section className="py-section-padding bg-[#0a0a0a] relative overflow-hidden" id="legends-circle"><div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter relative z-10"><div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-24"><div className="lg:col-span-7 reveal"><span className="font-label-sm text-label-sm text-secondary tracking-[0.3em] mb-6 block uppercase">Family &amp; Friends</span><h2 className="font-display-lg text-headline-lg-mobile md:text-[72px] mb-8 italic font-medium leading-none">Ein Kreis von Legenden</h2><p className="font-body-lg text-on-surface-variant max-w-xl leading-relaxed text-lg">Hinter jedem Döner steht eine Geschichte, hinter jeder Geschichte eine Seele. Über drei Jahrzehnte hinweg wurde Papa's Döner zum Ankerpunkt für Visionäre, Athleten und Nachbarn – vereint durch den Respekt vor wahrer Handwerkskunst.</p></div><div className="lg:col-span-5 reveal lg:text-right" style={{ transitionDelay: "200px" }}><div className="inline-block p-6 border border-white/5 bg-white/5 backdrop-blur-sm"><p className="heritage-caption text-xl mb-2">"Gäste kommen, Freunde bleiben."</p><span className="text-label-sm opacity-40 uppercase tracking-widest">— Papa's Philosophy</span></div></div></div><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
      <div className="reveal group" style={{ transitionDelay: "100px" }}>
      <div className="heritage-frame h-full">
      <div className="aspect-[3/4] overflow-hidden bg-black">
      <img alt="Guest at Papa's Döner" className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 group-hover:brightness-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAH7n6SsWANxm8aG5GzqgrxYuJzu8K_PyKV7tqMXGMERFJNzlSxPTXd9tCswiX_Rf0fCS9VkPPjbRnVPJZZmngwVXN8lusdiP9iGIZVBvTQqTAMTBpH5isPGtpCag1zADIDMyXDkP4lJhevfCmebd88UNE8dVvSaKs2ybUVcdiVU3N7PAPhAr-YrF1FjBal5DBjCUs1gDSzslL4VXPomW-Kuka8NsM806SC75Sq3yK5l-1miSdNM-YXBudgZOK8oY5vrWtx13n0iY0"/>
      </div>
      <div className="mt-4 flex justify-between items-center">
      <span className="heritage-caption text-xl">The Legend Circle</span>
      <span className="text-[10px] tracking-widest uppercase opacity-30">1996</span>
      </div>
      </div>
      </div>
      <div className="reveal group" style={{ transitionDelay: "200px" }}>
      <div className="heritage-frame h-full">
      <div className="aspect-[3/4] overflow-hidden bg-black">
      <img alt="Guest at Papa's Döner" className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 group-hover:brightness-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA77VQrfCGm6_q88UzCltkEPK6rcEiTXUMerxA9UL5jmV5-arjFwOBFDIH2B1CPC8e1PrvVGjYo02wU2SFrbdIcJvo5vmZqE8XfrCvKImS0OMU_ctyFm6tJ9fVhqZlCx7lqI-U4BgOMtVzr8-q_55DCe5UlnMUBxdPw0k-C1BpzvHt3LUHZrDQcrU7Wj_4LcvURQ5yo847D6A_mHF8XsV9EiTdrvVMaD7MKCY_c7UAOEUXcU8pYnUpiJPTmwDIrGX7XmXm7tsDQV28"/>
      </div>
      <div className="mt-4">
      <span className="heritage-caption text-xl">Quality Bond</span>
      </div>
      </div>
      </div>
      <div className="reveal group" style={{ transitionDelay: "300px" }}>
      <div className="heritage-frame h-full">
      <div className="aspect-[3/4] overflow-hidden bg-black">
      <img alt="Guest at Papa's Döner" className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 group-hover:brightness-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkk2RJsTv5NaqJiDFeB3g5Pd5gxt-vBjVp7fibK_Hmp4shxgekSKElHu8_rt3bkyRaMSWfI8rbHbxqxzsvxse0lzVdcOygDoSg1IUbusRT-qOTAmf1V9f5D9xpUN3no7uD_TbfgsDgsx_1A7JKbCklH_Jolee-EJIZ1HTvkDoL33FXV4jqPNXV9_YZ-FM2HNGcaMEjCZn32BqCmYdOIdulmuHk50CaJD6zT-K2OYGsQqkGKt8OkjFYGW2wGd5u4uX22PA-GkVHor4"/>
      </div>
      <div className="mt-4 text-center">
      <span className="heritage-caption text-xl">Signed with Love</span>
      </div>
      </div>
      </div>
      <div className="reveal group" style={{ transitionDelay: "400px" }}>
      <div className="heritage-frame h-full">
      <div className="aspect-[3/4] overflow-hidden bg-black">
      <img alt="Guest at Papa's Döner" className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 group-hover:brightness-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtZCbBON9QwDaFKqGzk23GZr4Lf0HsaCBK-Hk_CoZe6t-WA-PQIBkYu_RvS-GOCLbrrGlWIWd5NP1r8DSenDOgo8JbePBBhRpl_Uk75dDmrQhON5OMfR11XkS_kW01DQu8rWCIor7Pz-aRaSMM-2uGuIZmAp-oFz2PXMdrofdLAV32CHFqguuDplhRAGBjD8yjWhSfA0ObLzjWa49yt3YxKAfI-LbiXxoTsUUMyM9K85IaM4S30Vmx7vzUzlXtkWeAm-Sc4xdzHH4"/>
      </div>
      <div className="mt-4 flex items-center gap-4">
      <div className="h-[1px] flex-1 bg-white/10"></div>
      <span className="heritage-caption text-xl">Generation Unity</span>
      </div>
      </div>
      </div>
      </div></div><div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] font-display-lg opacity-[0.02] pointer-events-none select-none uppercase tracking-tighter whitespace-nowrap">HERITAGE</div></section><section className="relative min-h-screen flex items-center bg-[#0a0a0a]" id="location">
      <div className="absolute inset-0 z-0">
      <img alt="The Legendary Spot - Schwaben Galerie" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHZX3a7niH-cLvHAVVeim29Y_a1zopmqfJEpJGRqSl1VXNvxQsIV3No7W9GRoay_7tgu67lrK2wW2y6Mnt2QPDyxH-PYdgTWcPUoVzqA7mkPPYq-USaTllvTbUnuROjaMz8zGcrjjmYrTGODyw2X5TShO4F4wMU4ojKpXTins67fDQ1TqPHwA-O-kS1VByVPvKZbxVqJLnGWIRNsah-qli2Bx_aDoFfB16c0HLK8XfY54xuOj0YjMvko8sI-L7XFI-nH8LvS0yRBU"/>
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent"></div>
      </div>
      <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-gutter w-full">
      <div className="max-w-2xl reveal active">
      <span className="font-label-sm text-label-sm text-secondary tracking-[0.4em] mb-6 block uppercase">The Grand Return</span>
      <h2 className="font-display-lg text-headline-lg-mobile md:text-display-lg mb-10 leading-tight">Willkommen in der<br/>Schwaben Galerie</h2>
      <p className="font-body-lg text-body-lg text-on-surface-variant mb-12 leading-relaxed">
                      Der Ort, an dem die Geschichte weitergeschrieben wird. Ab 2026 finden Sie uns wieder in Stuttgart-Vaihingen. Ein moderner Tempel für traditionelle Kulinarik.
                  </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
      <div className="flex items-start gap-5">
      <span className="material-symbols-outlined text-secondary text-3xl">location_on</span>
      <div>
      <h4 className="text-white font-bold mb-1 uppercase tracking-widest text-xs">Adresse</h4>
      <p className="text-on-surface-variant font-body-md">Schwabenplatz 1<br/>70563 Stuttgart</p>
      </div>
      </div>
      <div className="flex items-start gap-5">
      <span className="material-symbols-outlined text-secondary text-3xl">event</span>
      <div>
      <h4 className="text-white font-bold mb-1 uppercase tracking-widest text-xs">Opening 2026</h4>
      <p className="text-on-surface-variant font-body-md">Wir bereiten alles vor.<br/>Folgen Sie uns für Updates.</p>
      </div>
      </div>
      </div>
      <button className="bg-white text-black px-16 py-5 font-label-sm tracking-widest transition-all hover:bg-secondary hover:text-on-secondary uppercase">UPDATE ERHALTEN</button>
      </div>
      </div>
      </section>
      
      <footer className="bg-surface-container-lowest border-t border-white/5 py-24">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
      <div className="md:col-span-2">
      <div className="flex items-center gap-4 mb-8">
      <img alt="Papa's Döner Logo" className="h-12 w-auto object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbl9jXSNxDJK-8xHY_jrJ5LV95L6pyab5bvX5uua0wkPyw-41sUU7onjxcJypBo788YbqywwVtIpPXHWIZuTRNWDx1obRm5jfRQ1VeR5dWSb_V_Q5AKSw8FA4APac3X1sg8Jfz1cTEVAOs5dYpupZnaCfnK5JBEosIpsK2_ZRef5JX0UZaNmMl_5_ChrXTZPtIi3RV8mY_tPwkiCdFsVgFx9sRXFofEyaZPRPqb7N2g-FjaXDO8lm-r4UIaZTm-KYJLDBP3fRQ6Oo"/>
      <span className="text-headline-md font-headline-md tracking-tighter uppercase">Papa's Döner</span>
      </div>
      <p className="text-on-surface-variant max-w-sm mb-8 leading-relaxed">
                          Legendäre Steak-Meat Tradition seit 1996. Wir sind zurück, um Stuttgart das Döner-Erlebnis zu geben, das es verdient.
                      </p>
      <div className="flex gap-6">
      <a className="w-10 h-10 border border-white/10 flex items-center justify-center hover:border-secondary transition-colors" href="#">
      <span className="material-symbols-outlined text-xl">share</span>
      </a>
      <a className="w-10 h-10 border border-white/10 flex items-center justify-center hover:border-secondary transition-colors" href="#">
      <span className="material-symbols-outlined text-xl">camera</span>
      </a>
      </div>
      </div>
      <div>
      <h5 className="text-label-sm tracking-widest uppercase text-white mb-8">History</h5>
      <ul className="space-y-4">
      <li className=""><a className="text-on-surface-variant hover:text-white transition-colors" href="#story">The 1996 Origin</a></li>
      <li className=""><a className="text-on-surface-variant hover:text-white transition-colors" href="#craft">Steak-Meat Pioneer</a></li>
      <li className=""><a className="text-on-surface-variant hover:text-white transition-colors" href="#location">Schwaben Galerie 2026</a></li>
      <li className=""><a className="text-on-surface-variant hover:text-white transition-colors" href="#menu">Our Legacy Menu</a></li>
      </ul>
      </div>
      <div>
      <h5 className="text-label-sm tracking-widest uppercase text-white mb-8">Kontakt</h5>
      <ul className="space-y-4">
      <li className="text-on-surface-variant">heritage@papasdoener.de</li>
      <li className="text-on-surface-variant">+49 (0) 711 Legend</li>
      <li className=""><a className="text-secondary hover:underline transition-colors font-label-sm" href="#">Impressum &amp; Datenschutz</a></li>
      </ul>
      </div>
      </div>
      <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
      <p className="text-[10px] uppercase tracking-[0.2em] opacity-40">© 1996 - 2024 Papa's Döner. The Legend Returns.</p>
      <p className="text-[10px] uppercase tracking-[0.2em] opacity-40">Artisanal Obsidian Design</p>
      </div>
      </div>
      </footer>
    </>
  );
}
