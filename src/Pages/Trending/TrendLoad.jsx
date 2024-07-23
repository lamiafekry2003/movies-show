import Skeleton from "react-loading-skeleton";

export default function TrendLoad() {
  return (
      <div className="col-md-2">
        <div
         style={{padding: '15px'}}
        >
          <Skeleton height={225} width={150}  style={{borderRadius:'10px'}}/>
          <div className="data mt-3">
            <p>
              <Skeleton width={150} />
            </p>
            <span className="time">
              <Skeleton width={150} />
            </span>
          </div>
        </div>
    </div>
  );
}
