const getCustomComputedStyles = style => {
  return style;
};

const FontFamily = {
  Regular: 'Rajdhani-Regular',
  Medium: 'Rajdhani-Medium',
};

// ---- Display - Reserved for short, important text or numerals. ----

export const DisplayLarge = getCustomComputedStyles({
  fontFamily: FontFamily.Regular,
  lineHeight: 64,
  fontSize: 57,
  letterSpacing: 0,
  fontWeight: '400',
});

export const DisplayMedium = getCustomComputedStyles({
  fontFamily: FontFamily.Regular,
  lineHeight: 52,
  fontSize: 45,
  letterSpacing: 0,
  fontWeight: '400',
});

export const DisplaySmall = getCustomComputedStyles({
  fontFamily: FontFamily.Regular,
  lineHeight: 44,
  fontSize: 36,
  letterSpacing: 0,
  fontWeight: '400',
});

// ---- Headline - Good for marking primary passages of text or important regions of content. ----

export const HeadlineLarge = getCustomComputedStyles({
  fontFamily: FontFamily.Regular,
  lineHeight: 40,
  fontSize: 32,
  letterSpacing: 0,
  fontWeight: '400',
});

export const HeadlineMedium = getCustomComputedStyles({
  fontFamily: FontFamily.Regular,
  lineHeight: 36,
  fontSize: 28,
  letterSpacing: 0,
  fontWeight: '400',
});

export const HeadlineSmall = getCustomComputedStyles({
  fontFamily: FontFamily.Regular,
  lineHeight: 32,
  fontSize: 24,
  letterSpacing: 0,
  fontWeight: '400',
});

// ---- Title - Emphasis text. For example, consider using title styles to divide secondary passages of text or secondary regions of content. ----

export const TitleLarge = getCustomComputedStyles({
  fontFamily: FontFamily.Regular,
  lineHeight: 28,
  fontSize: 22,
  letterSpacing: 0,
  fontWeight: '400',
});

export const TitleMedium = getCustomComputedStyles({
  fontFamily: FontFamily.Medium,
  lineHeight: 24,
  fontSize: 16,
  letterSpacing: 0.009375,
  fontWeight: '500',
});

export const TitleSmall = getCustomComputedStyles({
  fontFamily: FontFamily.Medium,
  lineHeight: 20,
  fontSize: 14,
  letterSpacing: 0.00625,
  fontWeight: '500',
});

// ---- Label - used for areas of the UI such as text inside of components or very small supporting text in the content body, like captions.
//Buttons, for example, use the label large style.----

export const LabelLarge = getCustomComputedStyles({
  fontFamily: FontFamily.Medium,
  lineHeight: 20,
  fontSize: 14,
  letterSpacing: 0.00625,
  fontWeight: '500',
});

export const LabelMedium = getCustomComputedStyles({
  fontFamily: FontFamily.Medium,
  lineHeight: 16,
  fontSize: 12,
  letterSpacing: 0.03125,
  fontWeight: '500',
});

export const LabelSmall = getCustomComputedStyles({
  fontFamily: FontFamily.Medium,
  lineHeight: 6,
  fontSize: 11,
  letterSpacing: 0.03125,
  fontWeight: '500',
});

// ---- Body - Body styles are used for longer passages of text. ----

export const BodyLarge = getCustomComputedStyles({
  fontFamily: FontFamily.Medium,
  lineHeight: 24,
  fontSize: 16,
  letterSpacing: 0.009375,
  fontWeight: '400',
});

export const BodyMedium = getCustomComputedStyles({
  fontFamily: FontFamily.Medium,
  lineHeight: 20,
  fontSize: 14,
  letterSpacing: 0.015625,
  fontWeight: '400',
});

export const BodySmall = getCustomComputedStyles({
  fontFamily: FontFamily.Medium,
  lineHeight: 16,
  fontSize: 12,
  letterSpacing: 0.025,
  fontWeight: '400',
});
