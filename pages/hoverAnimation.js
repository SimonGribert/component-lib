import { useEffect, useRef, useState } from "react";

const HoverAnimation = () => {
  // const video = useRef(null);
  const [hover, setHover] = useState(false);

  // useEffect(() => {
  //   if (hover) {
  //     if (video.current) {
  //       console.dir(video.current);
  //       console.log("hover: ", hover);
  //       video.current.ontimeupdate = (...props) => {
  //         console.log("Playing...", props)
  //       }
  //     }
  //   }
  // }, [hover]);

  /*useEffect(() => {
    if (video.current) {
      video.current.ontimeupdate = (event) => {
        let _curr = event.target.currentTime;
        console.log("Playing...", _curr);

        if (_curr >= 5) {
          event.target.currentTime = 2;
        }
      };
    }
  }, [video]);*/

  // let interval = useRef(null);
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const onTimeUpdate = useCallback(
    async (event) => {
      let _curr = event.target.currentTime;
      console.log("Playing...", _curr);
      if (hover) {
        if (_curr >= 5) {
          event.target.currentTime = 2;
        }
      } else {
        if (_curr > 0) {
          await sleep(100);
          event.target.currentTime -= 0.1;
        }
        /*console.log(interval);
        if (!interval.current) {
          interval.current = setInterval(() => {
            if (_curr > 0) {
              event.target.currentTime -= 0.1;
            } else {
              clearInterval(interval.current);
              event.target.pause();
            }
          }, 100);
          console.log("Happens one time");
        }
        console.log(interval); */
      }
    },
    [hover]
  );

  const onMouseOut = (event) => {
    setHover(false);
    event.target.pause();
  };

  const onMouseOver = (event) => {
    setHover(true);
    event.target.play();
  };

  return (
    <div>
      <p>Hello</p>
      <video
        id="video"
        // ref={video}
        width="400"
        muted
        poster="https://i.imgur.com/Us5ckqm.jpg"
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
        onTimeUpdate={onTimeUpdate}
        loop
        src="https://cdn.sanity.io/files/gvmfjmqk/production/a0ced7e90f9caae4ad0eaa71a07f015752ec6e87.mp4"
      ></video>
    </div>
  );
};

export default HoverAnimation;
