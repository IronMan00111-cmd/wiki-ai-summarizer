async function summarizeTopic() {
    const topic = document.getElementById("topicInput").value.trim();
    if (!topic) return;
  
    const outputDiv = document.getElementById("summaryOutput");
    outputDiv.innerHTML = "Summarizing...";
  
    try {
      const res = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(topic)}`);
      const data = await res.json();
  
      if (data.extract) {
        outputDiv.innerHTML = `<h3>${data.title}</h3><p>${data.extract}</p>`;
      } else {
        outputDiv.innerHTML = "No summary found.";
      }
    } catch (err) {
      outputDiv.innerHTML = "Error fetching summary.";
    }
  }
  