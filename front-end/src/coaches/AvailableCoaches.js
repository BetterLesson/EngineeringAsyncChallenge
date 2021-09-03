const mapCoachInfo = (coachData) => {
  return coachData.map((data) => {
    return (
      <div key={`${'coach-'+data.id}`} className="d-inline gap-2 d-sm-flex">
        <div className="col-4">{data.name}</div>
        <div className="col-4">{data.availability}</div>
        <div className="col-4">{data.industry}</div>
      </div>
    );
  });
};

const availableCoaches = (data) => {
  return (
    <div className="col">
      <div className="d-inline gap-2 d-sm-flex">
        <div className="col-4"><b>Coach Name</b></div>
        <div className="col-4"><b>Available Starting</b></div>
        <div className="col-4"><b>Industry</b></div>
      </div>
      {mapCoachInfo(data.coaches)}
    </div>
  )
}

export default availableCoaches;