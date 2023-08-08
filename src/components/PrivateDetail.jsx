const PrivateDetailSection = (props) => {
  return (
    <section id="CV-privateDetail" className="CV-privateDetail CV">
      <div id="CV-privateDetail-name">
        {props.inputValue["CV-privateDetail-name"]}
      </div>

      {props.privateInfos.email ? (
        <div id="CV-privateDetail-email" className="privateDetail">
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="#cccccc"
            className="svg-email"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.75 5.25L3 6V18L3.75 18.75H20.25L21 18V6L20.25 5.25H3.75ZM4.5 7.6955V17.25H19.5V7.69525L11.9999 14.5136L4.5 7.6955ZM18.3099 6.75H5.68986L11.9999 12.4864L18.3099 6.75Z"
              fill="#cccccc"
            />
          </svg>
          {props.inputValue["CV-privateDetail-email"]}
        </div>
      ) : (
        ""
      )}
      {props.privateInfos.phone ? (
        <div id="CV-privateDetail-phone" className="privateDetail">
          <svg
            fill="#cccccc"
            version="1.1"
            className="svg-phone"
            xmlns="http://www.w3.org/2000/svg"
            width="18px"
            height="18px"
            viewBox="0 0 512 512"
          >
            <path
              d="M256,0C114.609,0,0,114.609,0,256s114.609,256,256,256s256-114.609,256-256S397.391,0,256,0z M256,472
	c-119.297,0-216-96.703-216-216S136.703,40,256,40s216,96.703,216,216S375.297,472,256,472z"
            />
            <path
              d="M327.125,383.969c5.703,0.016,56.875-37.828,56.875-42.656s-57.266-40.906-62.219-40.906s-21.578,19.938-26.062,22.156
	c-4.5,2.219-32.5,1.422-63.703-29.781c-31.219-31.188-41.875-67.109-41.875-72.75s26.031-23.062,26.75-27.156
	S182.578,128,176.891,128S128,180.5,128,184.875s3.953,60.656,75.219,131.906S321.422,383.938,327.125,383.969z"
            />
          </svg>
          {props.inputValue["CV-privateDetail-phone"]}
        </div>
      ) : (
        ""
      )}
      {props.privateInfos.address ? (
        <div id="CV-privateDetail-address" className="privateDetail">
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 1024 1024"
            fill="#cccccc"
            className="svg-address"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M512 1012.8c-253.6 0-511.2-54.4-511.2-158.4 0-92.8 198.4-131.2 283.2-143.2h3.2c12 0 22.4 8.8 24 20.8 0.8 6.4-0.8 12.8-4.8 17.6-4 4.8-9.6 8.8-16 9.6-176.8 25.6-242.4 72-242.4 96 0 44.8 180.8 110.4 463.2 110.4s463.2-65.6 463.2-110.4c0-24-66.4-70.4-244.8-96-6.4-0.8-12-4-16-9.6-4-4.8-5.6-11.2-4.8-17.6 1.6-12 12-20.8 24-20.8h3.2c85.6 12 285.6 50.4 285.6 143.2 0.8 103.2-256 158.4-509.6 158.4z m-16.8-169.6c-12-11.2-288.8-272.8-288.8-529.6 0-168 136.8-304.8 304.8-304.8S816 145.6 816 313.6c0 249.6-276.8 517.6-288.8 528.8l-16 16-16-15.2zM512 56.8c-141.6 0-256.8 115.2-256.8 256.8 0 200.8 196 416 256.8 477.6 61.6-63.2 257.6-282.4 257.6-477.6C768.8 172.8 653.6 56.8 512 56.8z m0 392.8c-80 0-144.8-64.8-144.8-144.8S432 160 512 160c80 0 144.8 64.8 144.8 144.8 0 80-64.8 144.8-144.8 144.8zM512 208c-53.6 0-96.8 43.2-96.8 96.8S458.4 401.6 512 401.6c53.6 0 96.8-43.2 96.8-96.8S564.8 208 512 208z"
              fill=""
            />
          </svg>
          {props.inputValue["CV-privateDetail-address"]}
        </div>
      ) : (
        ""
      )}
    </section>
  );
};

export default PrivateDetailSection;
