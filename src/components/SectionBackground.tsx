interface SectionBackgroundProps {
  image?: string;
  /** Tailwind class for the placeholder tint when no image is provided */
  placeholderClassName?: string;
  /** Tailwind class for the readability veil over the image */
  overlayClassName?: string;
  backgroundSizeClassName?: string;
backgroundPositionClassName?: string;
backgroundRepeatClassName?: string;
}

/**
 * Decorative background layer for a section.
 * Parent section must be `relative overflow-hidden` and wrap its content
 * in a `relative z-10` container so text remains clearly readable.
 *
 * To swap the placeholder for a real image later, pass `image={importedAsset}`.
 */
const SectionBackground = ({
  image,
  placeholderClassName = 'bg-[#f5f1eb]/30',
  overlayClassName = 'bg-[#f5f1eb]/10',
   backgroundSizeClassName = 'bg-cover',
  backgroundPositionClassName = 'bg-center',
  backgroundRepeatClassName = 'bg-no-repeat',
}: SectionBackgroundProps) => {
  return (
    <div aria-hidden="true" className="absolute inset-0 -z-0 pointer-events-none">
      {image ? (
        <>
          <div
            className={`absolute inset-0 ${backgroundSizeClassName} ${backgroundPositionClassName} ${backgroundRepeatClassName}`}
            style={{ backgroundImage: `url(${image})` }}
          />
          <div className={`absolute inset-0 ${overlayClassName}`} />
        </>
      ) : (
        <div className={`absolute inset-0 ${placeholderClassName}`} />
      )}
    </div>
  );
};

export default SectionBackground;
