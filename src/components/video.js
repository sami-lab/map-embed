import React, { useState, useEffect } from "react";

let backend = " http://ec2-3-76-134-7.eu-central-1.compute.amazonaws.com:5000";
export default function Video({ selected }) {
  const [htmlContent, setHtmlContent] = useState("");

  useEffect(() => {
    const fetchHTML = async () => {
      try {
        let url = `${backend}/detection?video=${selected.videoId}`;
        const response = await fetch(url);
        const html = await response.text();
        setHtmlContent(html);
      } catch (error) {
        console.error("Error fetching HTML:", error);
      }
    };

    fetchHTML();
  }, [selected]);
  console.log(htmlContent);
  return (
    <>
      <iframe
        title='HTML Page'
        src={`${backend}/detection?video=${selected.videoId}`}
        style={{ width: "100%", height: "auto" }}
      />
      {/* {htmlContent ? (
        <iframe
          title='HTML Page'
          srcDoc={htmlContent}
          style={{ width: "100%", height: "500px" }}
        />
      ) : (
        <p>Loading...</p>
      )} */}
    </>
  );
}
