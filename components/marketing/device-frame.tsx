import type { ReactNode } from "react";

type DeviceFrameProps = {
  children: ReactNode;
  label?: string;
  className?: string;
};

export function DeviceFrame({ children, label, className = "" }: DeviceFrameProps) {
  return (
    <figure className={`device-frame m-0 ${className}`.trim()}>
      <div className="device-frame__wrap">
        <div className="device-frame__shell">
          <span className="device-frame__button device-frame__button--mute" aria-hidden />
          <span
            className="device-frame__button device-frame__button--volume-up"
            aria-hidden
          />
          <span
            className="device-frame__button device-frame__button--volume-down"
            aria-hidden
          />
          <span className="device-frame__button device-frame__button--power" aria-hidden />

          <div className="device-frame__bezel">
            <div className="device-frame__island" aria-hidden>
              <span className="device-frame__island-camera" />
            </div>
            <div className="device-frame__screen">{children}</div>
          </div>
        </div>
      </div>
      {label && (
        <figcaption className="type-eyebrow mt-5 text-center">{label}</figcaption>
      )}
    </figure>
  );
}
