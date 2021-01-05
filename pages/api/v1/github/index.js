export default async (req, res) => {
  return new Promise((resolve) => {
    fetch(
      `https://api.github.com/users/dudek-igor/repos?sort=created:asc&per_page=5`
    );
    res.json({ success: true });
    resolve();
  });
};
