import dayjs from "dayjs";
import SVG from "../../../../../../../../../../assets/vector";
import { GetNotificationsResult } from "../../../../../../../../../../services/api/api";

import { Link } from "react-router-dom";
import { bemModifiers } from "../../../../../../../../../../services/utilities";
import "./Notification.css";

type NotificationProps = GetNotificationsResult & {
  loading?: boolean;
};

export default function Notification({
  loading,
  ...notification
}: NotificationProps) {
  return (
    <li className={bemModifiers("notification", [{ loading }])}>
      <Link
        to={`/channel/${notification.channelId}`}
        className="notification__avatar"
      >
        {!loading && (
          <img
            className="notification__avatar-image"
            src={`${notification.channelAvatar.url}?random=avatar_notification${notification.id}`}
            alt={notification.channelName}
          />
        )}
      </Link>
      <div className="notification__content">
        <Link
          to={`/video/${notification.id}`}
          className="notification__description"
        >
          <span className="notification__channel">
            {notification.channelName}
          </span>{" "}
          uploaded: {notification.title}
        </Link>
        <p className="notification__timestamp">
          {Math.abs(
            dayjs(notification.uploadDateTime.date).diff(dayjs(), "years"),
          )}{" "}
          minutes ago
        </p>
        <div className="notification__actions">
          <button className="notification__action">
            <SVG.WatchLater.outline /> Watch later
          </button>
          <button className="notification__action">
            <SVG.Share.outline /> Share
          </button>
        </div>
      </div>
      <Link to={`/video/${notification.id}`} className="notification__media">
        {!loading && (
          <img
            src={`${notification.thumbnail.url}?random=thumbnail_notification${notification.id}`}
            alt={notification.title}
          />
        )}
      </Link>
      <button className="notification__options">
        <SVG.More.outline />
      </button>
    </li>
  );
}
