/**
 * Componentes Skeleton Loading
 * Efectos de carga visual
 */
import './Skeleton.css';

export const SkeletonRow = ({ title }) => (
  <div className="skeleton-row">
    <h2 className="skeleton-row__title">{title}</h2>
    <div className="skeleton-row__posters">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="skeleton-card">
          <div className="skeleton-card__image" />
        </div>
      ))}
    </div>
  </div>
);

export const SkeletonBanner = () => (
  <div className="skeleton-banner">
    <div className="skeleton-banner__fade" />
    <div className="skeleton-banner__content">
      <div className="skeleton-banner__title" />
      <div className="skeleton-banner__meta">
        <div className="skeleton-banner__rating" />
        <div className="skeleton-banner__year" />
      </div>
      <div className="skeleton-banner__description">
        <div className="skeleton-banner__line" />
        <div className="skeleton-banner__line skeleton-banner__line--short" />
      </div>
      <div className="skeleton-banner__buttons">
        <div className="skeleton-banner__btn" />
        <div className="skeleton-banner__btn" />
      </div>
    </div>
  </div>
);

export const SkeletonCard = () => (
  <div className="skeleton-card">
    <div className="skeleton-card__image" />
  </div>
);

export default { SkeletonRow, SkeletonBanner, SkeletonCard };
