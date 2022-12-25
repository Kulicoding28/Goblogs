import * as React from "react";

function Icon(props) {
  return (
    <svg
      className="inline-block"
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <path fill="url(#prefix__pattern0)" d="M0 0h24v24H0z" />
      <defs>
        <pattern
          id="prefix__pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use xlinkHref="#prefix__image0_129_2" transform="scale(.04167)" />
        </pattern>
        <image
          id="prefix__image0_129_2"
          width={24}
          height={24}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAVUlEQVRIie3SwRGAIBBD0Q2zVKSFYAsMgzXZkzUROsBT1MO+AvIvMQsPkGvpyoDTcCkDSTke/gG5lU0ZcA7cyoD8po7EXR0J34LXg8rACzc1nupIWJoKJgrZwh1mxwAAAABJRU5ErkJggg=="
        />
      </defs>
    </svg>
  );
}

export default Icon;
