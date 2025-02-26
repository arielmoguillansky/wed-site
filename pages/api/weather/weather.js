const handler = async (req, res) => {
  try {
    const response = await fetch(
      `https://archive-api.open-meteo.com/v1/era5?latitude=-34.4467052&longitude=-58.5445323&start_date=2021-05-17&end_date=2021-05-17&daily=temperature_2m_max,temperature_2m_min`
    );

    const data = await response.json();
    console.log("HEREEE", data);

    res.status(200).json({ ...data });
  } catch (err) {
    console.error(`ERROR: Something went wrong URL`, err);
    res.status(500).json(err);
  }
};

export default handler;
