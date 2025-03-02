import * as Popover from "@radix-ui/react-popover";
import Svg from "../../../../../../../../assets/vector";

import { useGetNotifications } from "../../../../../../../../services/api/api";
import Notification from "./componentes/Notification/Notification";

import { EMPTY_VIDEO_FOR_SKELETON } from "../../../../../../../../components/VideoCard/VideoCard.constants";
import "./Notifications.css";

export function Notifications() {
  const { data: notifications, isLoading } = useGetNotifications({
    page: 1,
    perPage: 10,
  });
  return (
    <Popover.Root>
      <Popover.Trigger className="header__user-menu-button popover__trigger notifications__button">
        <Svg.Notifs.outline />
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          align="end"
          alignOffset={-20}
          sideOffset={20}
          className="popover__content notifications__content"
        >
          <div className="notifications__header">
            <h2 className="notifications__title">Notifications</h2>
            <button className="notifications__settings-button">
              <Svg.Settings.outline />
            </button>
          </div>
          <div className="notifications__body">
            <ul className="notifications__list">
              {isLoading
                ? Array.from({ length: 10 }, () => ({
                    ...EMPTY_VIDEO_FOR_SKELETON,
                    channelId: "1",
                  })).map((notification) => (
                    <Notification
                      key={notification.id}
                      {...notification}
                      loading={true}
                    />
                  ))
                : notifications?.data?.data?.map((notification) => (
                    <Notification key={notification.id} {...notification} />
                  ))}
            </ul>
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
