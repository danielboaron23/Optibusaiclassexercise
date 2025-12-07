import svgPaths from "./svg-1drwgjkew2";
import imgImage131 from "figma:asset/fd8f454c969a52a5661662299ddad401cef43630.png";

function OldHamburger() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="OLD - hamburger">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="OLD - hamburger">
          <g id="shape">
            <path d="M1 2H17V4H1V2Z" fill="var(--fill-0, #F2F3F5)" />
            <path d="M17 14H1V16H17V14Z" fill="var(--fill-0, #F2F3F5)" />
            <path d="M1 8H17V10H1V8Z" fill="var(--fill-0, #F2F3F5)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function OpsIconButton() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center p-[8px] relative rounded-[40px] shrink-0" data-name="ops icon button">
      <OldHamburger />
    </div>
  );
}

function Left() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="left">
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#f2f3f5] text-[14px] text-nowrap tracking-[-0.5px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] whitespace-pre" dir="auto">
          WEEKLY
        </p>
      </div>
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "16", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="h-0 relative w-[16px]" data-name="divider">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(70, 75, 89, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 1">
                <line id="divider" stroke="var(--stroke-0, #464B59)" x2="16" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#bdc1c9] text-[14px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] whitespace-pre" dir="auto">
          MANCHESTER
        </p>
      </div>
    </div>
  );
}

function Wrap() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="wrap">
      <div className="basis-0 flex flex-col font-['open_sans:regular',sans-serif] grow h-[16px] justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#dfe1e5] text-[12px] text-nowrap">
        <p className="[white-space-collapse:collapse] leading-[16px] overflow-ellipsis overflow-hidden">North</p>
      </div>
    </div>
  );
}

function IconSArrowFillDown() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="icon S - arrow fill - down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="icon S - arrow fill - down">
          <path d={svgPaths.p3a2c6e70} fill="var(--fill-0, #BDC1C9)" id="shape" />
        </g>
      </svg>
    </div>
  );
}

function SingleSelectDropdownInput() {
  return (
    <div className="bg-[#303745] box-border content-stretch flex gap-[4px] h-[30px] items-center px-[8px] py-[2px] relative rounded-[4px] shrink-0 w-[145px]" data-name="🔘 single select dropdown - input">
      <Wrap />
      <IconSArrowFillDown />
    </div>
  );
}

function Left1() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center pl-0 pr-[8px] py-0 relative shrink-0" data-name="left">
      <OpsIconButton />
      <Left />
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#bdc1c9] text-[14px] text-nowrap tracking-[0.4px] uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] whitespace-pre" dir="auto">
          -
        </p>
      </div>
      <SingleSelectDropdownInput />
    </div>
  );
}

function OldIconLShareOperationalPlan() {
  return (
    <div className="relative shrink-0 size-[36px]" data-name="OLD - icon L - share operational plan">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="OLD - icon L - share operational plan">
          <g id="shape">
            <path d={svgPaths.p1af55e00} fill="var(--fill-0, #BDC1C9)" />
            <path d={svgPaths.p35a2f2f0} fill="var(--fill-0, #BDC1C9)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function OldIconLEnvelop() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="OLD - icon L - envelop">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="OLD - icon L - envelop">
          <g id="shape">
            <path d={svgPaths.pf498e00} fill="#BDC1C9" />
            <path d={svgPaths.p1c27500} fill="#BDC1C9" />
            <path d={svgPaths.pd5f0b80} fill="#BDC1C9" />
            <path d={svgPaths.p29887080} fill="#BDC1C9" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center p-[4px] relative shrink-0" data-name="frame">
      <OldIconLEnvelop />
    </div>
  );
}

function OldIconLRequest() {
  return (
    <div className="relative shrink-0 size-[36px]" data-name="OLD - icon L - request">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="OLD - icon L - request">
          <path d={svgPaths.p2aa27ebc} fill="var(--fill-0, #BDC1C9)" id="shape" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="h-[24px] relative shrink-0 w-0" data-name="frame">
      <div className="absolute bottom-0 left-0 right-[-1px] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 24">
          <g id="frame">
            <line id="divider" stroke="var(--stroke-0, #464B59)" x1="0.500001" x2="0.5" y1="2.18558e-08" y2="24" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Description() {
  return (
    <div className="mr-[-4px] relative shrink-0 size-[28px]" data-name="description">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="description">
          <mask height="28" id="mask0_1_35532" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="28" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="27.9999" id="Bounding box" width="27.9999" />
          </mask>
          <g mask="url(#mask0_1_35532)">
            <path d={svgPaths.p28876200} fill="var(--fill-0, #BDC1C9)" id="description_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function OldIconSArrowFillDown() {
  return (
    <div className="mr-[-4px] relative shrink-0 size-[14px]" data-name="OLD - icon S - arrow fill - down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="OLD - icon S - arrow fill - down">
          <path d={svgPaths.p3a2c6e70} fill="var(--fill-0, #BDC1C9)" id="shape" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="box-border content-stretch flex h-[36px] items-center justify-center pl-0 pr-[4px] py-0 relative shrink-0 w-[42px]" data-name="frame">
      <Description />
      <OldIconSArrowFillDown />
    </div>
  );
}

function OldIconLPreferences() {
  return (
    <div className="relative shrink-0 size-[36px]" data-name="OLD - icon L - preferences">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="OLD - icon L - preferences">
          <g id="shape">
            <path d={svgPaths.p3801de00} fill="var(--fill-0, #BDC1C9)" />
            <path d="M9 11H19V13H9V11Z" fill="var(--fill-0, #BDC1C9)" />
            <path d={svgPaths.p39dd1900} fill="var(--fill-0, #BDC1C9)" />
            <path d="M15 23H9V25H15V23Z" fill="var(--fill-0, #BDC1C9)" />
            <path d="M17 17H27V19H17V17Z" fill="var(--fill-0, #BDC1C9)" />
            <path d={svgPaths.p7bbe800} fill="var(--fill-0, #BDC1C9)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function SettingsAndFile() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="settings and file">
      <Frame2 />
      <OldIconLPreferences />
    </div>
  );
}

function UserButton() {
  return (
    <div className="relative shrink-0 size-[36px]" data-name="user button">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="user button">
          <circle cx="18" cy="18" fill="var(--fill-0, #1A1E24)" id="ellipse" r="18" />
          <g id="Icon / L">
            <path d={svgPaths.pf7b4000} fill="var(--fill-0, #BDC1C9)" id="Subtract" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-end pl-[16px] pr-0 py-0 relative shrink-0" data-name="frame">
      <OldIconLShareOperationalPlan />
      <Frame />
      <OldIconLRequest />
      <Frame1 />
      <SettingsAndFile />
      <UserButton />
    </div>
  );
}

function Right() {
  return (
    <div className="box-border content-stretch flex items-center justify-end pl-0 pr-[16px] py-0 relative shrink-0" data-name="right">
      <Frame3 />
    </div>
  );
}

function TopBarAsaf() {
  return (
    <div className="bg-[#282e36] h-[44px] shrink-0 sticky top-0 w-full" data-name="top bar - Asaf">
      <div className="content-stretch flex h-[44px] items-center justify-between overflow-clip relative rounded-[inherit] w-full">
        <Left1 />
        <Right />
      </div>
      <div aria-hidden="true" className="absolute border-[#464b59] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Group() {
  return (
    <div className="relative size-[30px]">
      <div className="absolute inset-[-36.67%_-50%_-63.33%_-50%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
          <g id="Group 1412">
            <g filter="url(#filter0_dd_1_35506)" id="Ellipse 119">
              <circle cx="30" cy="26" fill="var(--fill-0, #282E36)" r="15" />
            </g>
            <g id="Icon / M">
              <rect fill="#282E36" height="18" transform="translate(39 17) rotate(90)" width="18" />
              <path d={svgPaths.p13d5f800} fill="var(--fill-0, #DFE1E5)" id="Union" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="60" id="filter0_dd_1_35506" width="60" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="7.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_35506" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="3" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" />
              <feBlend in2="effect1_dropShadow_1_35506" mode="normal" result="effect2_dropShadow_1_35506" />
              <feBlend in="SourceGraphic" in2="effect2_dropShadow_1_35506" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="content-stretch flex flex-col h-[40px] items-center justify-center relative shrink-0 w-full" data-name="Footer">
      <div className="h-[9px] relative shrink-0 w-[33px]" data-name="image 131">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage131} />
      </div>
    </div>
  );
}

function LeftNav() {
  return (
    <div className="bg-[#282e36] box-border content-stretch flex flex-col h-full items-center justify-between pb-0 pt-[16px] px-0 relative shrink-0 w-[48px]" data-name="left nav">
      <div aria-hidden="true" className="absolute border-[#464b59] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg]">
          <Group />
        </div>
      </div>
      <Footer />
    </div>
  );
}

function InputBorder() {
  return (
    <div className="absolute inset-0 rounded-[4px]" data-name=".input border">
      <div aria-hidden="true" className="absolute border border-[#464b59] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function IconSCalendarStandard() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="icon S - Calendar - standard">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="icon S - Calendar - standard">
          <path clipRule="evenodd" d={svgPaths.p2482b000} fill="var(--fill-0, #BDC1C9)" fillRule="evenodd" id="shape" />
        </g>
      </svg>
    </div>
  );
}

function DatePickerInput() {
  return (
    <div className="bg-[#303745] box-border content-stretch flex gap-[2px] h-[30px] items-center px-[8px] py-[2px] relative rounded-[4px] shrink-0 w-[180px]" data-name="Date picker input">
      <InputBorder />
      <div className="basis-0 flex flex-col font-['open_sans:regular',sans-serif] grow h-[16px] justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#dfe1e5] text-[12px] text-nowrap">
        <p className="[white-space-collapse:collapse] leading-[16px] overflow-ellipsis overflow-hidden">16 – 22 July 2026</p>
      </div>
      <IconSCalendarStandard />
    </div>
  );
}

function IconSArrowOutlineLeft() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="icon S - arrow outline - left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="icon S - arrow outline - left">
          <path d={svgPaths.p17d5c500} fill="var(--fill-0, #BDC1C9)" id="shape" />
        </g>
      </svg>
    </div>
  );
}

function PaginationButtonPrev() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative rounded-[4px] shrink-0 size-[20px]" data-name="Pagination Button - prev">
      <IconSArrowOutlineLeft />
    </div>
  );
}

function IconSArrowOutlineRight() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="icon S - arrow outline - right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="icon S - arrow outline - right">
          <path d={svgPaths.p3857c00} fill="var(--fill-0, #BDC1C9)" id="shape" />
        </g>
      </svg>
    </div>
  );
}

function PaginationButtonNext() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative rounded-[4px] shrink-0 size-[20px]" data-name="Pagination Button - next">
      <IconSArrowOutlineRight />
    </div>
  );
}

function PaginationBar() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[44px]" data-name="Pagination Bar">
      <PaginationButtonPrev />
      <PaginationButtonNext />
    </div>
  );
}

function IconSArrowFillDown1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="icon S - arrow fill - down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="icon S - arrow fill - down">
          <path d={svgPaths.p1626580} fill="var(--fill-0, #DFE1E5)" id="shape" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#303745] box-border content-stretch flex gap-[8px] h-[30px] items-center justify-center pl-[16px] pr-[12px] py-[2px] relative rounded-[4px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['open_sans:bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#dfe1e5] text-[12px] text-center text-nowrap tracking-[0.6px] uppercase">
        <p className="leading-[16px] whitespace-pre" dir="auto">
          Save as planned
        </p>
      </div>
      <IconSArrowFillDown1 />
    </div>
  );
}

function Top() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="top">
      <DatePickerInput />
      <PaginationBar />
      <Button />
    </div>
  );
}

function IconSStats() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="icon S - Stats">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="icon S - Stats">
          <g id="shape">
            <path d={svgPaths.p108c1d80} fill="var(--fill-0, #DFE1E5)" />
            <path d={svgPaths.p3048ffc0} fill="var(--fill-0, #DFE1E5)" />
            <path d={svgPaths.p1c28a800} fill="var(--fill-0, #DFE1E5)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#303745] box-border content-stretch flex gap-[4px] h-[30px] items-center justify-center px-[6px] py-[3px] relative rounded-[4px]" data-name="Button">
      <IconSStats />
    </div>
  );
}

function InputBorder1() {
  return (
    <div className="absolute inset-0 rounded-[4px]" data-name=".input border">
      <div aria-hidden="true" className="absolute border border-[#464b59] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Wrap1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="wrap">
      <div className="flex flex-col font-['open_sans:italic',sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#bdc1c9] text-[12px] text-nowrap">
        <p className="leading-[16px] overflow-ellipsis overflow-hidden whitespace-pre">Search</p>
      </div>
    </div>
  );
}

function TextInputSingleLine() {
  return (
    <div className="basis-0 bg-[#303745] grow h-[30px] min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Text input - Single line">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[2px] h-[30px] items-center pl-[8px] pr-[6px] py-[2px] relative w-full">
          <InputBorder1 />
          <Wrap1 />
        </div>
      </div>
    </div>
  );
}

function IconMFilter() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="icon M - filter">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="icon M - filter">
          <path d={svgPaths.p1692f100} fill="var(--fill-0, #DFE1E5)" id="shape" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#303745] box-border content-stretch flex gap-[8px] h-[30px] items-center justify-center pl-[12px] pr-[16px] py-[2px] relative rounded-[4px] shrink-0" data-name="Button">
      <IconMFilter />
      <div className="flex flex-col font-['open_sans:bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#dfe1e5] text-[12px] text-center text-nowrap tracking-[0.6px] uppercase">
        <p className="leading-[16px] whitespace-pre" dir="auto">
          FILTER
        </p>
      </div>
    </div>
  );
}

function IconMSend() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="icon M - Send">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="icon M - Send">
          <path d={svgPaths.p16f19880} fill="var(--fill-0, #DFE1E5)" id="shape" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#303745] box-border content-stretch flex gap-[4px] h-[30px] items-center justify-center px-[6px] py-[3px] relative rounded-[4px] shrink-0" data-name="Button">
      <IconMSend />
    </div>
  );
}

function IconSArrowFillDown2() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="icon S - arrow fill - down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="icon S - arrow fill - down">
          <path d={svgPaths.p1626580} fill="var(--fill-0, white)" id="shape" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#2868fc] box-border content-stretch flex gap-[8px] h-[30px] items-center justify-center pl-[16px] pr-[12px] py-[2px] relative rounded-[4px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['open_sans:bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-nowrap text-white tracking-[0.6px] uppercase">
        <p className="leading-[16px] whitespace-pre" dir="auto">
          Allocate
        </p>
      </div>
      <IconSArrowFillDown2 />
    </div>
  );
}

function Bottom() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="bottom">
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "30", "--transform-inner-height": "30" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <Button1 />
        </div>
      </div>
      <TextInputSingleLine />
      <Button2 />
      <Button3 />
      <div className="flex flex-row items-center self-stretch">
        <div className="flex h-full items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "30", "--transform-inner-height": "30" } as React.CSSProperties}>
          <div className="flex-none h-full rotate-[90deg]">
            <div className="h-full relative w-[30px]" data-name="divider">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(70, 75, 89, 1)" } as React.CSSProperties}>
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 1">
                  <line id="divider" stroke="var(--stroke-0, #464B59)" x2="30" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Button4 />
    </div>
  );
}

function WeeklyHeaderAsaf() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[12px] items-start pb-[8px] pt-0 px-0 relative shrink-0 w-full" data-name="weekly header - Asaf">
      <Top />
      <Bottom />
    </div>
  );
}

function Frame4() {
  return <div className="content-stretch flex gap-[4px] items-center shrink-0" data-name="frame" />;
}

function DayTableHeader() {
  return (
    <div className="bg-[#303745] box-border content-stretch flex h-[30px] items-center justify-between pb-[8px] pt-[7px] px-[8px] relative rounded-bl-[4px] rounded-tl-[4px] shrink-0 w-[200px]" data-name="Day Table Header">
      <div aria-hidden="true" className="absolute border-[#303745] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none rounded-bl-[4px] rounded-tl-[4px]" />
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#dfe1e5] text-[11px] text-nowrap tracking-[1.2px] uppercase whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Driver
      </p>
      <Frame4 />
    </div>
  );
}

function DayTableHeader1() {
  return (
    <div className="bg-[#303745] box-border content-stretch flex gap-[10px] h-[30px] items-center pb-[8px] pt-[7px] px-[8px] relative shrink-0 w-[88px]" data-name="Day Table Header">
      <div aria-hidden="true" className="absolute border-[#303745] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#dfe1e5] text-[11px] text-nowrap tracking-[1.2px] uppercase whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Seniority
      </p>
    </div>
  );
}

function Wrap2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="wrap">
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#dfe1e5] text-[11px] text-nowrap tracking-[1.2px] uppercase whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        FRI
      </p>
      <div className="relative shrink-0 size-[8px]" data-name="indicator">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(54, 204, 104, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
            <circle cx="4" cy="4" fill="var(--fill-0, #36CC68)" id="indicator" r="4" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Date() {
  return (
    <div className="content-stretch flex gap-[4px] h-[20px] items-center relative shrink-0" data-name="date">
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold h-[21px] justify-center leading-[0] relative shrink-0 text-[#dfe1e5] text-[11px] text-center tracking-[0.2px] uppercase w-[20px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">3</p>
      </div>
    </div>
  );
}

function DayTableHeaderAsaf() {
  return (
    <div className="bg-[#303745] box-border content-stretch flex h-[30px] items-center justify-between pb-[8px] pt-[7px] px-[8px] relative shrink-0 w-[144px]" data-name="Day Table Header - Asaf">
      <div aria-hidden="true" className="absolute border-[#464b59] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Wrap2 />
      <Date />
    </div>
  );
}

function Left2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="left">
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#dfe1e5] text-[11px] text-nowrap tracking-[1.2px] uppercase whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        SAT
      </p>
      <div className="relative shrink-0 size-[8px]" data-name="indicator">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(54, 204, 104, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
            <circle cx="4" cy="4" fill="var(--fill-0, #36CC68)" id="indicator" r="4" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function IconSFilterOn() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="icon S - filter - on">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="icon S - filter - on">
          <path clipRule="evenodd" d={svgPaths.p388a1280} fill="var(--fill-0, #DFE1E5)" fillRule="evenodd" id="shape" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#303745] box-border content-stretch flex gap-[4px] h-[20px] items-center justify-center p-[3px] relative rounded-[4px] shrink-0" data-name="Button">
      <IconSFilterOn />
    </div>
  );
}

function Date1() {
  return (
    <div className="content-stretch flex gap-[4px] h-[20px] items-center relative shrink-0" data-name="date">
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold h-[21px] justify-center leading-[0] relative shrink-0 text-[#dfe1e5] text-[11px] text-center tracking-[0.2px] uppercase w-[20px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">3</p>
      </div>
    </div>
  );
}

function Right1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="right">
      <Button5 />
      <Date1 />
    </div>
  );
}

function DayTableHeaderAsaf1() {
  return (
    <div className="bg-[#303745] box-border content-stretch flex h-[30px] items-center justify-between pb-[8px] pt-[7px] px-[8px] relative shrink-0 w-[144px]" data-name="Day Table Header - Asaf">
      <div aria-hidden="true" className="absolute border-[#464b59] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Left2 />
      <Right1 />
    </div>
  );
}

function Wrap3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="wrap">
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#dfe1e5] text-[11px] text-nowrap tracking-[1.2px] uppercase whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        SUN
      </p>
      <div className="relative shrink-0 size-[8px]" data-name="indicator">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(54, 204, 104, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
            <circle cx="4" cy="4" fill="var(--fill-0, #36CC68)" id="indicator" r="4" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Date2() {
  return (
    <div className="content-stretch flex gap-[4px] h-[20px] items-center relative shrink-0" data-name="date">
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold h-[21px] justify-center leading-[0] relative shrink-0 text-[#dfe1e5] text-[11px] text-center tracking-[0.2px] uppercase w-[20px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">3</p>
      </div>
    </div>
  );
}

function DayTableHeaderAsaf2() {
  return (
    <div className="bg-[#303745] box-border content-stretch flex h-[30px] items-center justify-between pb-[8px] pt-[7px] px-[8px] relative shrink-0 w-[144px]" data-name="Day Table Header - Asaf">
      <div aria-hidden="true" className="absolute border-[#464b59] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Wrap3 />
      <Date2 />
    </div>
  );
}

function Wrap4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="wrap">
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#dfe1e5] text-[11px] text-nowrap tracking-[1.2px] uppercase whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        MON
      </p>
      <div className="relative shrink-0 size-[8px]" data-name="indicator">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(54, 204, 104, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
            <circle cx="4" cy="4" fill="var(--fill-0, #36CC68)" id="indicator" r="4" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Date3() {
  return (
    <div className="content-stretch flex gap-[4px] h-[20px] items-center relative shrink-0" data-name="date">
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold h-[21px] justify-center leading-[0] relative shrink-0 text-[#dfe1e5] text-[11px] text-center tracking-[0.2px] uppercase w-[20px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">3</p>
      </div>
    </div>
  );
}

function DayTableHeaderAsaf3() {
  return (
    <div className="bg-[#303745] box-border content-stretch flex h-[30px] items-center justify-between pb-[8px] pt-[7px] px-[8px] relative shrink-0 w-[144px]" data-name="Day Table Header - Asaf">
      <div aria-hidden="true" className="absolute border-[#464b59] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Wrap4 />
      <Date3 />
    </div>
  );
}

function Wrap5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="wrap">
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#dfe1e5] text-[11px] text-nowrap tracking-[1.2px] uppercase whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        TUE
      </p>
      <div className="relative shrink-0 size-[8px]" data-name="indicator">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(54, 204, 104, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
            <circle cx="4" cy="4" fill="var(--fill-0, #36CC68)" id="indicator" r="4" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Date4() {
  return (
    <div className="content-stretch flex gap-[4px] h-[20px] items-center relative shrink-0" data-name="date">
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold h-[21px] justify-center leading-[0] relative shrink-0 text-[#dfe1e5] text-[11px] text-center tracking-[0.2px] uppercase w-[20px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">3</p>
      </div>
    </div>
  );
}

function DayTableHeaderAsaf4() {
  return (
    <div className="bg-[#303745] box-border content-stretch flex h-[30px] items-center justify-between pb-[8px] pt-[7px] px-[8px] relative shrink-0 w-[144px]" data-name="Day Table Header - Asaf">
      <div aria-hidden="true" className="absolute border-[#464b59] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Wrap5 />
      <Date4 />
    </div>
  );
}

function Wrap6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="wrap">
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#dfe1e5] text-[11px] text-nowrap tracking-[1.2px] uppercase whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        WED
      </p>
      <div className="relative shrink-0 size-[8px]" data-name="indicator">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(54, 204, 104, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
            <circle cx="4" cy="4" fill="var(--fill-0, #36CC68)" id="indicator" r="4" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Date5() {
  return (
    <div className="content-stretch flex gap-[4px] h-[20px] items-center relative shrink-0" data-name="date">
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold h-[21px] justify-center leading-[0] relative shrink-0 text-[#dfe1e5] text-[11px] text-center tracking-[0.2px] uppercase w-[20px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">3</p>
      </div>
    </div>
  );
}

function DayTableHeaderAsaf5() {
  return (
    <div className="bg-[#303745] box-border content-stretch flex h-[30px] items-center justify-between pb-[8px] pt-[7px] px-[8px] relative shrink-0 w-[144px]" data-name="Day Table Header - Asaf">
      <div aria-hidden="true" className="absolute border-[#464b59] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Wrap6 />
      <Date5 />
    </div>
  );
}

function Wrap7() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="wrap">
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#dfe1e5] text-[11px] text-nowrap tracking-[1.2px] uppercase whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        THU
      </p>
      <div className="relative shrink-0 size-[8px]" data-name="indicator">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(54, 204, 104, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
            <circle cx="4" cy="4" fill="var(--fill-0, #36CC68)" id="indicator" r="4" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Date6() {
  return (
    <div className="content-stretch flex gap-[4px] h-[20px] items-center relative shrink-0" data-name="date">
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold h-[21px] justify-center leading-[0] relative shrink-0 text-[#dfe1e5] text-[11px] text-center tracking-[0.2px] uppercase w-[20px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">3</p>
      </div>
    </div>
  );
}

function DayTableHeaderAsaf6() {
  return (
    <div className="bg-[#303745] box-border content-stretch flex h-[30px] items-center justify-between pb-[8px] pt-[7px] px-[8px] relative shrink-0 w-[144px]" data-name="Day Table Header - Asaf">
      <div aria-hidden="true" className="absolute border-[#464b59] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Wrap7 />
      <Date6 />
    </div>
  );
}

function Wrap8() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="wrap">
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#dfe1e5] text-[11px] text-nowrap tracking-[1.2px] uppercase whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Sat
      </p>
      <div className="relative shrink-0 size-[8px]" data-name="indicator">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(54, 204, 104, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
            <circle cx="4" cy="4" fill="var(--fill-0, #36CC68)" id="indicator" r="4" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Date7() {
  return (
    <div className="content-stretch flex gap-[4px] h-[20px] items-center relative shrink-0" data-name="date">
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold h-[21px] justify-center leading-[0] relative shrink-0 text-[#dfe1e5] text-[11px] text-center tracking-[0.2px] uppercase w-[20px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">3</p>
      </div>
    </div>
  );
}

function DayTableHeaderAsaf7() {
  return (
    <div className="bg-[#303745] box-border content-stretch flex h-[30px] items-center justify-between pb-[8px] pt-[7px] px-[8px] relative shrink-0 w-[144px]" data-name="Day Table Header - Asaf">
      <div aria-hidden="true" className="absolute border-[#464b59] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Wrap8 />
      <Date7 />
    </div>
  );
}

function StatsHeader() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="stats header">
      <DayTableHeader />
      <DayTableHeader1 />
      <DayTableHeaderAsaf />
      <DayTableHeaderAsaf1 />
      <DayTableHeaderAsaf2 />
      <DayTableHeaderAsaf3 />
      <DayTableHeaderAsaf4 />
      <DayTableHeaderAsaf5 />
      <DayTableHeaderAsaf6 />
      <DayTableHeaderAsaf />
      <DayTableHeaderAsaf7 />
      <DayTableHeaderAsaf2 />
    </div>
  );
}

function TableHeaderColumn() {
  return (
    <div className="box-border content-stretch flex h-[20px] items-center pb-[8px] pl-[10px] pr-[4px] pt-[7px] relative shrink-0 w-[200px]" data-name="Table Header Column">
      <div aria-hidden="true" className="absolute border-[#464b59] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <p className="[white-space-collapse:collapse] font-['Open_Sans:Regular',sans-serif] font-normal leading-[16px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#dfe1e5] text-[11px] text-nowrap tracking-[1px] w-[142px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Unsaved as planned work
      </p>
    </div>
  );
}

function TableHeaderColumn1() {
  return (
    <div className="box-border content-stretch flex gap-[10px] h-[20px] items-center pb-[8px] pl-[10px] pr-[4px] pt-[7px] relative shrink-0 w-[88px]" data-name="Table Header Column">
      <div aria-hidden="true" className="absolute border-[#464b59] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function DayTableHeader2() {
  return (
    <div className="box-border content-stretch flex gap-[10px] h-[20px] items-center pb-[8px] pt-[7px] px-[10px] relative shrink-0 w-[144px]" data-name="Day Table Header">
      <div aria-hidden="true" className="absolute border-[#464b59] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#dfe1e5] text-[11px] text-nowrap tracking-[1px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        5
      </p>
    </div>
  );
}

function Row() {
  return (
    <div className="relative shrink-0 w-[1369px]" data-name="row">
      <div className="content-stretch flex items-center overflow-clip relative rounded-[inherit] w-[1369px]">
        <TableHeaderColumn />
        <TableHeaderColumn1 />
        {[...Array(10).keys()].map((_, i) => (
          <DayTableHeader2 key={i} />
        ))}
      </div>
      <div aria-hidden="true" className="absolute border-[#464b59] border-[1px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function IconMArrowFillMDown() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="icon M - arrow fill - m down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="icon M - arrow fill - m down">
          <path clipRule="evenodd" d="M9 12L13 8H5L9 12Z" fill="var(--fill-0, #DFE1E5)" fillRule="evenodd" id="shape" />
        </g>
      </svg>
    </div>
  );
}

function TableHeaderColumn2() {
  return (
    <div className="box-border content-stretch flex h-[20px] items-center pb-[8px] pl-[10px] pr-[4px] pt-[7px] relative rounded-bl-[4px] rounded-tl-[4px] shrink-0 w-[200px]" data-name="Table Header Column">
      <div aria-hidden="true" className="absolute border-[#464b59] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none rounded-bl-[4px] rounded-tl-[4px]" />
      <p className="[white-space-collapse:collapse] font-['Open_Sans:Regular',sans-serif] font-normal leading-[16px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#dfe1e5] text-[11px] text-nowrap tracking-[1px] w-[142px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Unallocated duties
      </p>
      <IconMArrowFillMDown />
    </div>
  );
}

function TableHeaderColumn3() {
  return (
    <div className="box-border content-stretch flex gap-[10px] h-[20px] items-center justify-center pl-[10px] pr-[4px] py-0 relative shrink-0 w-[88px]" data-name="Table Header Column">
      <div aria-hidden="true" className="absolute border-[#464b59] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function DayTableHeader3() {
  return (
    <div className="box-border content-stretch flex gap-[10px] h-[20px] items-center pb-[8px] pt-[7px] px-[10px] relative shrink-0 w-[144px]" data-name="Day Table Header">
      <div aria-hidden="true" className="absolute border-[#464b59] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#dfe1e5] text-[11px] text-nowrap tracking-[1px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        5
      </p>
    </div>
  );
}

function DayTableHeader4() {
  return (
    <div className="box-border content-stretch flex gap-[10px] h-[20px] items-center pb-[8px] pt-[7px] px-[10px] relative rounded-br-[4px] rounded-tr-[4px] shrink-0 w-[144px]" data-name="Day Table Header">
      <div aria-hidden="true" className="absolute border-[#464b59] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none rounded-br-[4px] rounded-tr-[4px]" />
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#dfe1e5] text-[11px] text-nowrap tracking-[1px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        5
      </p>
    </div>
  );
}

function Row1() {
  return (
    <div className="relative shrink-0 w-full" data-name="row">
      <div className="content-stretch flex items-center overflow-clip relative rounded-[inherit] w-full">
        <TableHeaderColumn2 />
        <TableHeaderColumn3 />
        {[...Array(8).keys()].map((_, i) => (
          <DayTableHeader3 key={i} />
        ))}
        {[...Array(2).keys()].map((_, i) => (
          <DayTableHeader4 key={i} />
        ))}
      </div>
      <div aria-hidden="true" className="absolute border-[#464b59] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Stats() {
  return (
    <div className="bg-[#282e36] content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="stats">
      <Row />
      <Row1 />
    </div>
  );
}

function GridHeader() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="grid header">
      <StatsHeader />
      <Stats />
    </div>
  );
}

function UserAvatar() {
  return (
    <div className="bg-[#06887c] relative rounded-[9999px] shrink-0 size-[30px]" data-name="User Avatar">
      <div className="absolute flex flex-col font-['open_sans:bold',sans-serif] h-[29px] justify-center leading-[0] left-[15px] not-italic text-[14px] text-center text-white top-[14.5px] tracking-[-0.5px] translate-x-[-50%] translate-y-[-50%] w-[30px]">
        <p className="leading-[19px]">AB</p>
      </div>
    </div>
  );
}

function Bottom1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center leading-[0] relative shrink-0 text-[11px] text-nowrap w-full" data-name="bottom">
      <div className="flex flex-col font-['open_sans:regular',sans-serif] justify-center not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#f2f3f5]">
        <p className="leading-[16px] overflow-ellipsis overflow-hidden text-[11px] text-nowrap whitespace-pre">Early</p>
      </div>
      <div className="basis-0 flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold grow justify-center min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#bdc1c9] tracking-[0.4px] uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="[white-space-collapse:collapse] leading-[normal] overflow-ellipsis overflow-hidden text-[11px] text-nowrap">324099</p>
      </div>
    </div>
  );
}

function Info() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[134px]" data-name="info">
      <p className="[white-space-collapse:collapse] font-['open_sans:bold',sans-serif] leading-[12px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#dfe1e5] text-[12px] text-nowrap tracking-[0.4px] w-full">James Joyce</p>
      <Bottom1 />
    </div>
  );
}

function DriverCellAsaf() {
  return (
    <div className="bg-[#282e36] box-border content-stretch flex gap-[12px] items-start pb-0 pl-[16px] pr-0 pt-[8px] relative rounded-bl-[4px] rounded-tl-[4px] self-stretch shrink-0 w-[200px]" data-name="Driver cell - Asaf">
      <UserAvatar />
      <Info />
    </div>
  );
}

function Stats1() {
  return (
    <div className="bg-[#282e36] box-border content-stretch flex gap-[8px] items-start p-[8px] relative self-stretch shrink-0 w-[89px]" data-name="stats">
      <div aria-hidden="true" className="absolute border-[#464b59] border-[0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#dfe1e5] text-[12px] text-nowrap tracking-[1.4px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        4
      </p>
    </div>
  );
}

function OldIconSPlus() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="OLD - icon S - plus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="OLD - icon S - plus">
          <path d={svgPaths.p2bd77380} fill="var(--fill-0, #BDC1C9)" id="shape" />
        </g>
      </svg>
    </div>
  );
}

function OldButton() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center justify-center p-[3px] relative rounded-[4px] shrink-0 size-[14px]" data-name="OLD - Button">
      <OldIconSPlus />
    </div>
  );
}

function ButtonAsaf() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Button - Asaf">
      <OldButton />
    </div>
  );
}

function EmptyDayAsaf() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[46px] items-center justify-center relative rounded-[3px] shrink-0 w-full" data-name="empty day - Asaf">
      <div aria-hidden="true" className="absolute border border-[#626773] border-dashed inset-[-0.5px] pointer-events-none rounded-[3.5px]" />
      <ButtonAsaf />
    </div>
  );
}

function Frame5() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="frame">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[2px] h-[16px] items-center px-[2px] py-0 w-full" />
      </div>
    </div>
  );
}

function DayIconsAsaf() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[16px] items-start relative shrink-0 w-[116px]" data-name="day icons - Asaf">
      <div className="absolute inset-0 rounded-[4px]" />
      <Frame5 />
    </div>
  );
}

function DayAsaf() {
  return (
    <div className="relative shrink-0" data-name="day - Asaf">
      <div className="box-border content-stretch flex flex-col gap-[4px] items-center overflow-clip pb-[9px] pt-px px-[14px] relative rounded-[inherit]">
        <EmptyDayAsaf />
        <DayIconsAsaf />
      </div>
      <div aria-hidden="true" className="absolute border-[#464b59] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Title() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="title">
      <p className="[white-space-collapse:collapse] basis-0 font-['open_sans:bold',sans-serif] grow leading-[12px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#bdc1c9] text-[12px] text-nowrap tracking-[0.4px]">1025 (EA)</p>
    </div>
  );
}

function Top1() {
  return (
    <div className="content-stretch flex gap-[4px] h-[20px] items-center relative shrink-0 w-full" data-name="top">
      <Title />
    </div>
  );
}

function WeeklyDutyInfoAsaf() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-center relative shrink-0" data-name=".weekly duty info - Asaf">
      <p className="font-['open_sans:regular',sans-serif] leading-[16px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#bdc1c9] text-[12px] text-nowrap whitespace-pre">05:00-12:00</p>
    </div>
  );
}

function Body() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="body">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-between pb-[4px] pl-[6px] pr-[3px] pt-0 relative size-full">
          <Top1 />
          <WeeklyDutyInfoAsaf />
        </div>
      </div>
    </div>
  );
}

function Rail() {
  return (
    <div className="bg-[#464b59] h-[3px] overflow-clip relative shrink-0 w-full" data-name="rail">
      <div className="absolute bottom-0 left-0 right-[62.07%] top-0" data-name="indicator">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(173, 177, 186, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 3">
            <path d="M0 0H44V3H0V0Z" fill="var(--fill-0, #ADB1BA)" id="indicator" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function WeeklyDutyCellAsaf() {
  return (
    <div className="bg-[#282e36] h-[46px] relative rounded-[3px] shrink-0 w-[116px]" data-name=".weekly duty cell - Asaf">
      <div className="box-border content-stretch flex flex-col h-[46px] items-start justify-between overflow-clip pb-px pt-[3px] px-0 relative rounded-[inherit] w-[116px]">
        <Body />
        <Rail />
      </div>
      <div aria-hidden="true" className="absolute border border-[#464b59] border-solid inset-0 pointer-events-none rounded-[3px]" />
    </div>
  );
}

function Frame6() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="frame">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[2px] h-[16px] items-center px-[2px] py-0 w-full" />
      </div>
    </div>
  );
}

function DayIconsAsaf1() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[16px] items-start relative shrink-0 w-[116px]" data-name="day icons - Asaf">
      <div className="absolute inset-0 rounded-[4px]" />
      <Frame6 />
    </div>
  );
}

function DayAsaf1() {
  return (
    <div className="relative shrink-0" data-name="day - Asaf">
      <div className="box-border content-stretch flex flex-col gap-[4px] items-center overflow-clip pb-[9px] pt-px px-[14px] relative rounded-[inherit]">
        <WeeklyDutyCellAsaf />
        <DayIconsAsaf1 />
      </div>
      <div aria-hidden="true" className="absolute border-[#464b59] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Title1() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="title">
      <p className="[white-space-collapse:collapse] basis-0 font-['open_sans:bold',sans-serif] grow leading-[12px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#bdc1c9] text-[12px] text-nowrap tracking-[0.4px]">1025 (EA)</p>
    </div>
  );
}

function Top2() {
  return (
    <div className="content-stretch flex gap-[4px] h-[20px] items-center relative shrink-0 w-full" data-name="top">
      <Title1 />
    </div>
  );
}

function WeeklyDutyInfoAsaf1() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-center relative shrink-0" data-name=".weekly duty info - Asaf">
      <p className="font-['open_sans:regular',sans-serif] leading-[16px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#bdc1c9] text-[12px] text-nowrap whitespace-pre">05:00-12:00</p>
    </div>
  );
}

function Body1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="body">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-between pb-[4px] pl-[6px] pr-[3px] pt-0 relative size-full">
          <Top2 />
          <WeeklyDutyInfoAsaf1 />
        </div>
      </div>
    </div>
  );
}

function Rail1() {
  return (
    <div className="bg-[#464b59] h-[3px] overflow-clip relative shrink-0 w-full" data-name="rail">
      <div className="absolute bottom-0 left-0 right-[62.07%] top-0" data-name="indicator">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(173, 177, 186, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 3">
            <path d="M0 0H44V3H0V0Z" fill="var(--fill-0, #ADB1BA)" id="indicator" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function WeeklyDutyCellAsaf1() {
  return (
    <div className="bg-[#282e36] h-[46px] relative rounded-[3px] shrink-0 w-[116px]" data-name=".weekly duty cell - Asaf">
      <div className="box-border content-stretch flex flex-col h-[46px] items-start justify-between overflow-clip pb-px pt-[3px] px-0 relative rounded-[inherit] w-[116px]">
        <Body1 />
        <Rail1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#464b59] border-solid inset-0 pointer-events-none rounded-[3px]" />
    </div>
  );
}

function Frame7() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="frame">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[2px] h-[16px] items-center px-[2px] py-0 w-full" />
      </div>
    </div>
  );
}

function DayIconsAsaf2() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[16px] items-start relative shrink-0 w-[116px]" data-name="day icons - Asaf">
      <div className="absolute inset-0 rounded-[4px]" />
      <Frame7 />
    </div>
  );
}

function DayAsaf2() {
  return (
    <div className="relative rounded-[4px] shrink-0" data-name="day - Asaf">
      <div className="box-border content-stretch flex flex-col gap-[4px] items-center overflow-clip pb-[9px] pt-px px-[14px] relative rounded-[inherit]">
        <WeeklyDutyCellAsaf1 />
        <DayIconsAsaf2 />
      </div>
      <div aria-hidden="true" className="absolute border-[#464b59] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Cells() {
  return (
    <div className="content-stretch flex items-start relative rounded-[2px] shrink-0 w-[1070px]" data-name="cells">
      <DayAsaf />
      {[...Array(9).keys()].map((_, i) => (
        <DayAsaf1 key={i} />
      ))}
      <DayAsaf2 />
    </div>
  );
}

function WeeklyRow() {
  return (
    <div className="bg-[#1a1e24] content-stretch flex items-start overflow-clip relative shrink-0 w-full" data-name="weekly row">
      <DriverCellAsaf />
      <Stats1 />
      <Cells />
    </div>
  );
}

function UserAvatar1() {
  return (
    <div className="bg-[#06887c] relative rounded-[9999px] shrink-0 size-[30px]" data-name="User Avatar">
      <div className="absolute flex flex-col font-['open_sans:bold',sans-serif] h-[29px] justify-center leading-[0] left-[15px] not-italic text-[14px] text-center text-white top-[14.5px] tracking-[-0.5px] translate-x-[-50%] translate-y-[-50%] w-[30px]">
        <p className="leading-[19px]">AB</p>
      </div>
    </div>
  );
}

function Bottom2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center leading-[0] relative shrink-0 text-[11px] text-nowrap w-full" data-name="bottom">
      <div className="flex flex-col font-['open_sans:regular',sans-serif] justify-center not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#f2f3f5]">
        <p className="leading-[16px] overflow-ellipsis overflow-hidden text-[11px] text-nowrap whitespace-pre">Early</p>
      </div>
      <div className="basis-0 flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold grow justify-center min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#bdc1c9] tracking-[0.4px] uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="[white-space-collapse:collapse] leading-[normal] overflow-ellipsis overflow-hidden text-[11px] text-nowrap">324099</p>
      </div>
    </div>
  );
}

function Info1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[134px]" data-name="info">
      <p className="[white-space-collapse:collapse] font-['open_sans:bold',sans-serif] leading-[12px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#dfe1e5] text-[12px] text-nowrap tracking-[0.4px] w-full">James Joyce</p>
      <Bottom2 />
    </div>
  );
}

function DriverCellAsaf1() {
  return (
    <div className="bg-[#282e36] box-border content-stretch flex gap-[12px] items-start pb-0 pl-[16px] pr-0 pt-[8px] relative rounded-bl-[4px] rounded-tl-[4px] self-stretch shrink-0 w-[200px]" data-name="Driver cell - Asaf">
      <UserAvatar1 />
      <Info1 />
    </div>
  );
}

function Stats2() {
  return (
    <div className="bg-[#282e36] box-border content-stretch flex gap-[8px] items-start p-[8px] relative self-stretch shrink-0 w-[89px]" data-name="stats">
      <div aria-hidden="true" className="absolute border-[#464b59] border-[0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#dfe1e5] text-[12px] text-nowrap tracking-[1.4px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        4
      </p>
    </div>
  );
}

function Title2() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="title">
      <p className="[white-space-collapse:collapse] basis-0 font-['open_sans:bold',sans-serif] grow leading-[12px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#bdc1c9] text-[12px] text-nowrap tracking-[0.4px]">1025 (EA)</p>
    </div>
  );
}

function Top3() {
  return (
    <div className="content-stretch flex gap-[4px] h-[20px] items-center relative shrink-0 w-full" data-name="top">
      <Title2 />
    </div>
  );
}

function WeeklyDutyInfoAsaf2() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-center relative shrink-0" data-name=".weekly duty info - Asaf">
      <p className="font-['open_sans:regular',sans-serif] leading-[16px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#bdc1c9] text-[12px] text-nowrap whitespace-pre">05:00-12:00</p>
    </div>
  );
}

function Body2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="body">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-between pb-[4px] pl-[6px] pr-[3px] pt-0 relative size-full">
          <Top3 />
          <WeeklyDutyInfoAsaf2 />
        </div>
      </div>
    </div>
  );
}

function Rail2() {
  return (
    <div className="bg-[#464b59] h-[3px] overflow-clip relative shrink-0 w-full" data-name="rail">
      <div className="absolute bottom-0 left-0 right-[62.07%] top-0" data-name="indicator">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(173, 177, 186, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 3">
            <path d="M0 0H44V3H0V0Z" fill="var(--fill-0, #ADB1BA)" id="indicator" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function WeeklyDutyCellAsaf2() {
  return (
    <div className="bg-[#282e36] h-[46px] relative rounded-[3px] shrink-0 w-[116px]" data-name=".weekly duty cell - Asaf">
      <div className="box-border content-stretch flex flex-col h-[46px] items-start justify-between overflow-clip pb-px pt-[3px] px-0 relative rounded-[inherit] w-[116px]">
        <Body2 />
        <Rail2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#464b59] border-solid inset-0 pointer-events-none rounded-[3px]" />
    </div>
  );
}

function Frame8() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="frame">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[2px] h-[16px] items-center px-[2px] py-0 w-full" />
      </div>
    </div>
  );
}

function DayIconsAsaf3() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[16px] items-start relative shrink-0 w-[116px]" data-name="day icons - Asaf">
      <div className="absolute inset-0 rounded-[4px]" />
      <Frame8 />
    </div>
  );
}

function DayAsaf3() {
  return (
    <div className="relative shrink-0" data-name="day - Asaf">
      <div className="box-border content-stretch flex flex-col gap-[4px] items-center overflow-clip pb-[9px] pt-px px-[14px] relative rounded-[inherit]">
        <WeeklyDutyCellAsaf2 />
        <DayIconsAsaf3 />
      </div>
      <div aria-hidden="true" className="absolute border-[#464b59] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function OldIconSPlus1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="OLD - icon S - plus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="OLD - icon S - plus">
          <path d={svgPaths.p2bd77380} fill="var(--fill-0, #BDC1C9)" id="shape" />
        </g>
      </svg>
    </div>
  );
}

function OldButton1() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center justify-center p-[3px] relative rounded-[4px] shrink-0 size-[14px]" data-name="OLD - Button">
      <OldIconSPlus1 />
    </div>
  );
}

function ButtonAsaf1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Button - Asaf">
      <OldButton1 />
    </div>
  );
}

function EmptyDayAsaf1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[46px] items-center justify-center relative rounded-[3px] shrink-0 w-full" data-name="empty day - Asaf">
      <div aria-hidden="true" className="absolute border border-[#626773] border-dashed inset-[-0.5px] pointer-events-none rounded-[3.5px]" />
      <ButtonAsaf1 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="frame">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[2px] h-[16px] items-center px-[2px] py-0 w-full" />
      </div>
    </div>
  );
}

function DayIconsAsaf4() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[16px] items-start relative shrink-0 w-[116px]" data-name="day icons - Asaf">
      <div className="absolute inset-0 rounded-[4px]" />
      <Frame9 />
    </div>
  );
}

function DayAsaf4() {
  return (
    <div className="relative shrink-0" data-name="day - Asaf">
      <div className="box-border content-stretch flex flex-col gap-[4px] items-center overflow-clip pb-[9px] pt-px px-[14px] relative rounded-[inherit]">
        <EmptyDayAsaf1 />
        <DayIconsAsaf4 />
      </div>
      <div aria-hidden="true" className="absolute border-[#303745] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Title3() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="title">
      <p className="[white-space-collapse:collapse] basis-0 font-['open_sans:bold',sans-serif] grow leading-[12px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#bdc1c9] text-[12px] text-nowrap tracking-[0.4px]">1025 (EA)</p>
    </div>
  );
}

function Top4() {
  return (
    <div className="content-stretch flex gap-[4px] h-[20px] items-center relative shrink-0 w-full" data-name="top">
      <Title3 />
    </div>
  );
}

function WeeklyDutyInfoAsaf3() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-center relative shrink-0" data-name=".weekly duty info - Asaf">
      <p className="font-['open_sans:regular',sans-serif] leading-[16px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#bdc1c9] text-[12px] text-nowrap whitespace-pre">05:00-12:00</p>
    </div>
  );
}

function Body3() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="body">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-between pb-[4px] pl-[6px] pr-[3px] pt-0 relative size-full">
          <Top4 />
          <WeeklyDutyInfoAsaf3 />
        </div>
      </div>
    </div>
  );
}

function Rail3() {
  return (
    <div className="bg-[#464b59] h-[3px] overflow-clip relative shrink-0 w-full" data-name="rail">
      <div className="absolute bottom-0 left-0 right-[62.07%] top-0" data-name="indicator">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(173, 177, 186, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 3">
            <path d="M0 0H44V3H0V0Z" fill="var(--fill-0, #ADB1BA)" id="indicator" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function WeeklyDutyCellAsaf3() {
  return (
    <div className="bg-[#282e36] h-[46px] relative rounded-[3px] shrink-0 w-[116px]" data-name=".weekly duty cell - Asaf">
      <div className="box-border content-stretch flex flex-col h-[46px] items-start justify-between overflow-clip pb-px pt-[3px] px-0 relative rounded-[inherit] w-[116px]">
        <Body3 />
        <Rail3 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#464b59] border-solid inset-0 pointer-events-none rounded-[3px]" />
    </div>
  );
}

function IconSError() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="icon S - error">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="icon S - error">
          <circle cx="7" cy="7" fill="var(--fill-0, #F07E86)" id="error" r="6" />
          <g id="exclamation mark">
            <path d="M8 3H6V8H8V3Z" fill="var(--fill-0, #192338)" />
            <path d={svgPaths.p8370870} fill="var(--fill-0, #192338)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function AbsenceAsaf() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Absence - Asaf">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Absence - Asaf">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p339d8800} fill="var(--fill-0, #BDC1C9)" fillRule="evenodd" />
            <path d={svgPaths.p21e25300} fill="var(--fill-0, #BDC1C9)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconSHand() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="icon S - Hand">
      <div className="absolute flex h-[14px] items-center justify-center left-[2px] top-0 w-[11px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="h-[14px] relative w-[11px]" data-name="shape">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 14">
              <path d={svgPaths.p27cdd780} fill="var(--fill-0, #968DFE)" id="shape" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function VolunteerAsafEnabledFullNoA() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Volunteer - Asaf/enabled/full/No/A">
      <IconSHand />
    </div>
  );
}

function IconSDriverSpare() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="icon S - Driver spare">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="icon S - Driver spare">
          <g id="shape">
            <path d={svgPaths.p19117500} fill="var(--fill-0, #26DAC5)" />
            <path d={svgPaths.p13d85000} fill="var(--fill-0, #26DAC5)" />
            <path d={svgPaths.p12ea5800} fill="var(--fill-0, #26DAC5)" />
            <path d={svgPaths.p3bd0e880} fill="var(--fill-0, #26DAC5)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame10() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="frame">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[2px] h-[16px] items-center px-[2px] py-0 relative w-full">
          <IconSError />
          <AbsenceAsaf />
          <VolunteerAsafEnabledFullNoA />
          <IconSDriverSpare />
        </div>
      </div>
    </div>
  );
}

function DayIconsAsaf5() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[16px] items-start relative shrink-0 w-[116px]" data-name="day icons - Asaf">
      <div className="absolute inset-0 rounded-[4px]" />
      <Frame10 />
    </div>
  );
}

function DayAsaf5() {
  return (
    <div className="relative shrink-0" data-name="day - Asaf">
      <div className="box-border content-stretch flex flex-col gap-[4px] items-center overflow-clip pb-[9px] pt-px px-[14px] relative rounded-[inherit]">
        <WeeklyDutyCellAsaf3 />
        <DayIconsAsaf5 />
      </div>
      <div aria-hidden="true" className="absolute border-[#464b59] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Title4() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="title">
      <p className="[white-space-collapse:collapse] basis-0 font-['open_sans:bold',sans-serif] grow leading-[12px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#bdc1c9] text-[12px] text-nowrap tracking-[0.4px]">1025 (EA)</p>
    </div>
  );
}

function Top5() {
  return (
    <div className="content-stretch flex gap-[4px] h-[20px] items-center relative shrink-0 w-full" data-name="top">
      <Title4 />
    </div>
  );
}

function WeeklyDutyInfoAsaf4() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-center relative shrink-0" data-name=".weekly duty info - Asaf">
      <p className="font-['open_sans:regular',sans-serif] leading-[16px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#bdc1c9] text-[12px] text-nowrap whitespace-pre">05:00-12:00</p>
    </div>
  );
}

function Body4() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="body">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-between pb-[4px] pl-[6px] pr-[3px] pt-0 relative size-full">
          <Top5 />
          <WeeklyDutyInfoAsaf4 />
        </div>
      </div>
    </div>
  );
}

function Rail4() {
  return (
    <div className="bg-[#464b59] h-[3px] overflow-clip relative shrink-0 w-full" data-name="rail">
      <div className="absolute bottom-0 left-0 right-[62.07%] top-0" data-name="indicator">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(173, 177, 186, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 3">
            <path d="M0 0H44V3H0V0Z" fill="var(--fill-0, #ADB1BA)" id="indicator" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function WeeklyDutyCellAsaf4() {
  return (
    <div className="bg-[#282e36] h-[46px] relative rounded-[3px] shrink-0 w-[116px]" data-name=".weekly duty cell - Asaf">
      <div className="box-border content-stretch flex flex-col h-[46px] items-start justify-between overflow-clip pb-px pt-[3px] px-0 relative rounded-[inherit] w-[116px]">
        <Body4 />
        <Rail4 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#464b59] border-solid inset-0 pointer-events-none rounded-[3px]" />
    </div>
  );
}

function Frame11() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="frame">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[2px] h-[16px] items-center px-[2px] py-0 w-full" />
      </div>
    </div>
  );
}

function DayIconsAsaf6() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[16px] items-start relative shrink-0 w-[116px]" data-name="day icons - Asaf">
      <div className="absolute inset-0 rounded-[4px]" />
      <Frame11 />
    </div>
  );
}

function DayAsaf6() {
  return (
    <div className="relative rounded-[4px] shrink-0" data-name="day - Asaf">
      <div className="box-border content-stretch flex flex-col gap-[4px] items-center overflow-clip pb-[9px] pt-px px-[14px] relative rounded-[inherit]">
        <WeeklyDutyCellAsaf4 />
        <DayIconsAsaf6 />
      </div>
      <div aria-hidden="true" className="absolute border-[#464b59] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Cells1() {
  return (
    <div className="content-stretch flex items-start relative rounded-[2px] shrink-0 w-[1070px]" data-name="cells">
      <DayAsaf3 />
      <DayAsaf4 />
      <DayAsaf3 />
      <DayAsaf5 />
      <DayAsaf3 />
      <DayAsaf3 />
      <DayAsaf3 />
      <DayAsaf3 />
      <DayAsaf3 />
      <DayAsaf3 />
      <DayAsaf6 />
    </div>
  );
}

function WeeklyRow1() {
  return (
    <div className="bg-[#1a1e24] content-stretch flex items-start overflow-clip relative shrink-0 w-full" data-name="weekly row">
      <DriverCellAsaf1 />
      <Stats2 />
      <Cells1 />
    </div>
  );
}

function UserAvatar2() {
  return (
    <div className="bg-[#06887c] relative rounded-[9999px] shrink-0 size-[30px]" data-name="User Avatar">
      <div className="absolute flex flex-col font-['open_sans:bold',sans-serif] h-[29px] justify-center leading-[0] left-[15px] not-italic text-[14px] text-center text-white top-[14.5px] tracking-[-0.5px] translate-x-[-50%] translate-y-[-50%] w-[30px]">
        <p className="leading-[19px]">AB</p>
      </div>
    </div>
  );
}

function Bottom3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center leading-[0] relative shrink-0 text-[11px] text-nowrap w-full" data-name="bottom">
      <div className="flex flex-col font-['open_sans:regular',sans-serif] justify-center not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#f2f3f5]">
        <p className="leading-[16px] overflow-ellipsis overflow-hidden text-[11px] text-nowrap whitespace-pre">Early</p>
      </div>
      <div className="basis-0 flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold grow justify-center min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#bdc1c9] tracking-[0.4px] uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="[white-space-collapse:collapse] leading-[normal] overflow-ellipsis overflow-hidden text-[11px] text-nowrap">324099</p>
      </div>
    </div>
  );
}

function Info2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[134px]" data-name="info">
      <p className="[white-space-collapse:collapse] font-['open_sans:bold',sans-serif] leading-[12px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#dfe1e5] text-[12px] text-nowrap tracking-[0.4px] w-full">James Joyce</p>
      <Bottom3 />
    </div>
  );
}

function DriverCellAsaf2() {
  return (
    <div className="bg-[#282e36] box-border content-stretch flex gap-[12px] items-start pb-0 pl-[16px] pr-0 pt-[8px] relative rounded-bl-[4px] rounded-tl-[4px] self-stretch shrink-0 w-[200px]" data-name="Driver cell - Asaf">
      <UserAvatar2 />
      <Info2 />
    </div>
  );
}

function Stats3() {
  return (
    <div className="bg-[#282e36] box-border content-stretch flex gap-[8px] items-start p-[8px] relative self-stretch shrink-0 w-[89px]" data-name="stats">
      <div aria-hidden="true" className="absolute border-[#464b59] border-[0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#dfe1e5] text-[12px] text-nowrap tracking-[1.4px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        4
      </p>
    </div>
  );
}

function Title5() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="title">
      <p className="[white-space-collapse:collapse] basis-0 font-['open_sans:bold',sans-serif] grow leading-[12px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#bdc1c9] text-[12px] text-nowrap tracking-[0.4px]">1025 (EA)</p>
    </div>
  );
}

function Top6() {
  return (
    <div className="content-stretch flex gap-[4px] h-[20px] items-center relative shrink-0 w-full" data-name="top">
      <Title5 />
    </div>
  );
}

function WeeklyDutyInfoAsaf5() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-center relative shrink-0" data-name=".weekly duty info - Asaf">
      <p className="font-['open_sans:regular',sans-serif] leading-[16px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#bdc1c9] text-[12px] text-nowrap whitespace-pre">05:00-12:00</p>
    </div>
  );
}

function Body5() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="body">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-between pb-[4px] pl-[6px] pr-[3px] pt-0 relative size-full">
          <Top6 />
          <WeeklyDutyInfoAsaf5 />
        </div>
      </div>
    </div>
  );
}

function Rail5() {
  return (
    <div className="bg-[#464b59] h-[3px] overflow-clip relative shrink-0 w-full" data-name="rail">
      <div className="absolute bottom-0 left-0 right-[62.07%] top-0" data-name="indicator">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(173, 177, 186, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 3">
            <path d="M0 0H44V3H0V0Z" fill="var(--fill-0, #ADB1BA)" id="indicator" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function WeeklyDutyCellAsaf5() {
  return (
    <div className="bg-[#282e36] h-[46px] relative rounded-[3px] shrink-0 w-[116px]" data-name=".weekly duty cell - Asaf">
      <div className="box-border content-stretch flex flex-col h-[46px] items-start justify-between overflow-clip pb-px pt-[3px] px-0 relative rounded-[inherit] w-[116px]">
        <Body5 />
        <Rail5 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#464b59] border-solid inset-0 pointer-events-none rounded-[3px]" />
    </div>
  );
}

function Frame12() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="frame">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[2px] h-[16px] items-center px-[2px] py-0 w-full" />
      </div>
    </div>
  );
}

function DayIconsAsaf7() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[16px] items-start relative shrink-0 w-[116px]" data-name="day icons - Asaf">
      <div className="absolute inset-0 rounded-[4px]" />
      <Frame12 />
    </div>
  );
}

function DayAsaf7() {
  return (
    <div className="relative shrink-0" data-name="day - Asaf">
      <div className="box-border content-stretch flex flex-col gap-[4px] items-center overflow-clip pb-[9px] pt-px px-[14px] relative rounded-[inherit]">
        <WeeklyDutyCellAsaf5 />
        <DayIconsAsaf7 />
      </div>
      <div aria-hidden="true" className="absolute border-[#464b59] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function OldIconSPlus2() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="OLD - icon S - plus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="OLD - icon S - plus">
          <path d={svgPaths.p2bd77380} fill="var(--fill-0, #BDC1C9)" id="shape" />
        </g>
      </svg>
    </div>
  );
}

function OldButton2() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center justify-center p-[3px] relative rounded-[4px] shrink-0 size-[14px]" data-name="OLD - Button">
      <OldIconSPlus2 />
    </div>
  );
}

function ButtonAsaf2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Button - Asaf">
      <OldButton2 />
    </div>
  );
}

function EmptyDayAsaf2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[46px] items-center justify-center relative rounded-[3px] shrink-0 w-full" data-name="empty day - Asaf">
      <div aria-hidden="true" className="absolute border border-[#626773] border-dashed inset-[-0.5px] pointer-events-none rounded-[3.5px]" />
      <ButtonAsaf2 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="frame">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[2px] h-[16px] items-center px-[2px] py-0 w-full" />
      </div>
    </div>
  );
}

function DayIconsAsaf8() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[16px] items-start relative shrink-0 w-[116px]" data-name="day icons - Asaf">
      <div className="absolute inset-0 rounded-[4px]" />
      <Frame13 />
    </div>
  );
}

function DayAsaf8() {
  return (
    <div className="relative shrink-0" data-name="day - Asaf">
      <div className="box-border content-stretch flex flex-col gap-[4px] items-center overflow-clip pb-[9px] pt-px px-[14px] relative rounded-[inherit]">
        <EmptyDayAsaf2 />
        <DayIconsAsaf8 />
      </div>
      <div aria-hidden="true" className="absolute border-[#464b59] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function EmptyDayAsaf3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[46px] items-center justify-center relative rounded-[3px] shrink-0 w-full" data-name="empty day - Asaf">
      <div aria-hidden="true" className="absolute border border-[#464b59] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#bdc1c9] text-[12px] text-center text-nowrap tracking-[0.4px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Day Off
      </p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="frame">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[2px] h-[16px] items-center px-[2px] py-0 w-full" />
      </div>
    </div>
  );
}

function DayIconsAsaf9() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[16px] items-start relative shrink-0 w-[116px]" data-name="day icons - Asaf">
      <div className="absolute inset-0 rounded-[4px]" />
      <Frame14 />
    </div>
  );
}

function DayAsaf9() {
  return (
    <div className="relative shrink-0" data-name="day - Asaf">
      <div className="box-border content-stretch flex flex-col gap-[4px] items-center overflow-clip pb-[9px] pt-px px-[14px] relative rounded-[inherit]">
        <EmptyDayAsaf3 />
        <DayIconsAsaf9 />
      </div>
      <div aria-hidden="true" className="absolute border-[#464b59] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Title6() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="title">
      <p className="[white-space-collapse:collapse] basis-0 font-['open_sans:bold',sans-serif] grow leading-[12px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#bdc1c9] text-[12px] text-nowrap tracking-[0.4px]">1025 (EA)</p>
    </div>
  );
}

function Top7() {
  return (
    <div className="content-stretch flex gap-[4px] h-[20px] items-center relative shrink-0 w-full" data-name="top">
      <Title6 />
    </div>
  );
}

function WeeklyDutyInfoAsaf6() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-center relative shrink-0" data-name=".weekly duty info - Asaf">
      <p className="font-['open_sans:regular',sans-serif] leading-[16px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#bdc1c9] text-[12px] text-nowrap whitespace-pre">05:00-12:00</p>
    </div>
  );
}

function Body6() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="body">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-between pb-[4px] pl-[6px] pr-[3px] pt-0 relative size-full">
          <Top7 />
          <WeeklyDutyInfoAsaf6 />
        </div>
      </div>
    </div>
  );
}

function Rail6() {
  return (
    <div className="bg-[#464b59] h-[3px] overflow-clip relative shrink-0 w-full" data-name="rail">
      <div className="absolute bottom-0 left-0 right-[62.07%] top-0" data-name="indicator">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(173, 177, 186, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 3">
            <path d="M0 0H44V3H0V0Z" fill="var(--fill-0, #ADB1BA)" id="indicator" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function WeeklyDutyCellAsaf6() {
  return (
    <div className="bg-[#282e36] h-[46px] relative rounded-[3px] shrink-0 w-[116px]" data-name=".weekly duty cell - Asaf">
      <div className="box-border content-stretch flex flex-col h-[46px] items-start justify-between overflow-clip pb-px pt-[3px] px-0 relative rounded-[inherit] w-[116px]">
        <Body6 />
        <Rail6 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#464b59] border-solid inset-0 pointer-events-none rounded-[3px]" />
    </div>
  );
}

function Frame15() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="frame">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[2px] h-[16px] items-center px-[2px] py-0 w-full" />
      </div>
    </div>
  );
}

function DayIconsAsaf10() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[16px] items-start relative shrink-0 w-[116px]" data-name="day icons - Asaf">
      <div className="absolute inset-0 rounded-[4px]" />
      <Frame15 />
    </div>
  );
}

function DayAsaf10() {
  return (
    <div className="relative rounded-[4px] shrink-0" data-name="day - Asaf">
      <div className="box-border content-stretch flex flex-col gap-[4px] items-center overflow-clip pb-[9px] pt-px px-[14px] relative rounded-[inherit]">
        <WeeklyDutyCellAsaf6 />
        <DayIconsAsaf10 />
      </div>
      <div aria-hidden="true" className="absolute border-[#464b59] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Cells2() {
  return (
    <div className="content-stretch flex items-start relative rounded-[2px] shrink-0 w-[1070px]" data-name="cells">
      <DayAsaf7 />
      <DayAsaf7 />
      <DayAsaf8 />
      <DayAsaf7 />
      <DayAsaf9 />
      <DayAsaf7 />
      <DayAsaf7 />
      <DayAsaf7 />
      <DayAsaf7 />
      <DayAsaf7 />
      <DayAsaf10 />
    </div>
  );
}

function WeeklyRow2() {
  return (
    <div className="bg-[#1a1e24] content-stretch flex items-start overflow-clip relative shrink-0 w-full" data-name="weekly row">
      <DriverCellAsaf2 />
      <Stats3 />
      <Cells2 />
    </div>
  );
}

function UserAvatar3() {
  return (
    <div className="bg-[#06887c] relative rounded-[9999px] shrink-0 size-[30px]" data-name="User Avatar">
      <div className="absolute flex flex-col font-['open_sans:bold',sans-serif] h-[29px] justify-center leading-[0] left-[15px] not-italic text-[14px] text-center text-white top-[14.5px] tracking-[-0.5px] translate-x-[-50%] translate-y-[-50%] w-[30px]">
        <p className="leading-[19px]">AB</p>
      </div>
    </div>
  );
}

function Bottom4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center leading-[0] relative shrink-0 text-[11px] text-nowrap w-full" data-name="bottom">
      <div className="flex flex-col font-['open_sans:regular',sans-serif] justify-center not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#f2f3f5]">
        <p className="leading-[16px] overflow-ellipsis overflow-hidden text-[11px] text-nowrap whitespace-pre">Early</p>
      </div>
      <div className="basis-0 flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold grow justify-center min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#bdc1c9] tracking-[0.4px] uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="[white-space-collapse:collapse] leading-[normal] overflow-ellipsis overflow-hidden text-[11px] text-nowrap">324099</p>
      </div>
    </div>
  );
}

function Info3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[134px]" data-name="info">
      <p className="[white-space-collapse:collapse] font-['open_sans:bold',sans-serif] leading-[12px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#dfe1e5] text-[12px] text-nowrap tracking-[0.4px] w-full">James Joyce</p>
      <Bottom4 />
    </div>
  );
}

function DriverCellAsaf3() {
  return (
    <div className="bg-[#282e36] box-border content-stretch flex gap-[12px] items-start pb-0 pl-[16px] pr-0 pt-[8px] relative rounded-bl-[4px] rounded-tl-[4px] self-stretch shrink-0 w-[200px]" data-name="Driver cell - Asaf">
      <UserAvatar3 />
      <Info3 />
    </div>
  );
}

function Stats4() {
  return (
    <div className="bg-[#282e36] box-border content-stretch flex gap-[8px] items-start p-[8px] relative self-stretch shrink-0 w-[89px]" data-name="stats">
      <div aria-hidden="true" className="absolute border-[#464b59] border-[0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#dfe1e5] text-[12px] text-nowrap tracking-[1.4px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        4
      </p>
    </div>
  );
}

function Title7() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="title">
      <p className="[white-space-collapse:collapse] basis-0 font-['open_sans:bold',sans-serif] grow leading-[12px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#bdc1c9] text-[12px] text-nowrap tracking-[0.4px]">1025 (EA)</p>
    </div>
  );
}

function Top8() {
  return (
    <div className="content-stretch flex gap-[4px] h-[20px] items-center relative shrink-0 w-full" data-name="top">
      <Title7 />
    </div>
  );
}

function WeeklyDutyInfoAsaf7() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-center relative shrink-0" data-name=".weekly duty info - Asaf">
      <p className="font-['open_sans:regular',sans-serif] leading-[16px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#bdc1c9] text-[12px] text-nowrap whitespace-pre">05:00-12:00</p>
    </div>
  );
}

function Body7() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="body">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-between pb-[4px] pl-[6px] pr-[3px] pt-0 relative size-full">
          <Top8 />
          <WeeklyDutyInfoAsaf7 />
        </div>
      </div>
    </div>
  );
}

function Rail7() {
  return (
    <div className="bg-[#464b59] h-[3px] overflow-clip relative shrink-0 w-full" data-name="rail">
      <div className="absolute bottom-0 left-0 right-[62.07%] top-0" data-name="indicator">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(173, 177, 186, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 3">
            <path d="M0 0H44V3H0V0Z" fill="var(--fill-0, #ADB1BA)" id="indicator" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function WeeklyDutyCellAsaf7() {
  return (
    <div className="bg-[#282e36] h-[46px] relative rounded-[3px] shrink-0 w-[116px]" data-name=".weekly duty cell - Asaf">
      <div className="box-border content-stretch flex flex-col h-[46px] items-start justify-between overflow-clip pb-px pt-[3px] px-0 relative rounded-[inherit] w-[116px]">
        <Body7 />
        <Rail7 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#464b59] border-solid inset-0 pointer-events-none rounded-[3px]" />
    </div>
  );
}

function Frame16() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="frame">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[2px] h-[16px] items-center px-[2px] py-0 w-full" />
      </div>
    </div>
  );
}

function DayIconsAsaf11() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[16px] items-start relative shrink-0 w-[116px]" data-name="day icons - Asaf">
      <div className="absolute inset-0 rounded-[4px]" />
      <Frame16 />
    </div>
  );
}

function DayAsaf11() {
  return (
    <div className="relative self-stretch shrink-0" data-name="day - Asaf">
      <div className="box-border content-stretch flex flex-col gap-[4px] h-full items-center overflow-clip pb-[9px] pt-px px-[14px] relative rounded-[inherit]">
        <WeeklyDutyCellAsaf7 />
        <DayIconsAsaf11 />
      </div>
      <div aria-hidden="true" className="absolute border-[#464b59] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Title8() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="title">
      <p className="[white-space-collapse:collapse] basis-0 font-['open_sans:bold',sans-serif] grow leading-[12px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#bdc1c9] text-[12px] text-nowrap tracking-[0.4px]">1025 (EA)</p>
    </div>
  );
}

function Top9() {
  return (
    <div className="content-stretch flex gap-[4px] h-[20px] items-center relative shrink-0 w-full" data-name="top">
      <Title8 />
    </div>
  );
}

function WeeklyDutyInfoAsaf8() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-center relative shrink-0" data-name=".weekly duty info - Asaf">
      <p className="font-['open_sans:regular',sans-serif] leading-[16px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#bdc1c9] text-[12px] text-nowrap whitespace-pre">05:00-12:00</p>
    </div>
  );
}

function Body8() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="body">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-between pb-[4px] pl-[6px] pr-[3px] pt-0 relative size-full">
          <Top9 />
          <WeeklyDutyInfoAsaf8 />
        </div>
      </div>
    </div>
  );
}

function Rail8() {
  return (
    <div className="bg-[#464b59] h-[3px] overflow-clip relative shrink-0 w-full" data-name="rail">
      <div className="absolute bottom-0 left-0 right-[62.07%] top-0" data-name="indicator">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(173, 177, 186, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 3">
            <path d="M0 0H44V3H0V0Z" fill="var(--fill-0, #ADB1BA)" id="indicator" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function WeeklyDutyCellAsaf8() {
  return (
    <div className="bg-[#282e36] h-[46px] relative rounded-[3px] shrink-0 w-[116px]" data-name=".weekly duty cell - Asaf">
      <div className="box-border content-stretch flex flex-col h-[46px] items-start justify-between overflow-clip pb-px pt-[3px] px-0 relative rounded-[inherit] w-[116px]">
        <Body8 />
        <Rail8 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#464b59] border-solid inset-0 pointer-events-none rounded-[3px]" />
    </div>
  );
}

function Frame17() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="frame">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[2px] h-[16px] items-center px-[2px] py-0 w-full" />
      </div>
    </div>
  );
}

function DayIconsAsaf12() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[16px] items-start relative shrink-0 w-[116px]" data-name="day icons - Asaf">
      <div className="absolute inset-0 rounded-[4px]" />
      <Frame17 />
    </div>
  );
}

function DayAsaf12() {
  return (
    <div className="relative shrink-0" data-name="day - Asaf">
      <div className="box-border content-stretch flex flex-col gap-[4px] items-center overflow-clip pb-[9px] pt-px px-[14px] relative rounded-[inherit]">
        {[...Array(2).keys()].map((_, i) => (
          <WeeklyDutyCellAsaf8 key={i} />
        ))}
        <DayIconsAsaf12 />
      </div>
      <div aria-hidden="true" className="absolute border-[#464b59] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Title9() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="title">
      <p className="[white-space-collapse:collapse] basis-0 font-['open_sans:bold',sans-serif] grow leading-[12px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#bdc1c9] text-[12px] text-nowrap tracking-[0.4px]">1025 (EA)</p>
    </div>
  );
}

function Top10() {
  return (
    <div className="content-stretch flex gap-[4px] h-[20px] items-center relative shrink-0 w-full" data-name="top">
      <Title9 />
    </div>
  );
}

function WeeklyDutyInfoAsaf9() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-center relative shrink-0" data-name=".weekly duty info - Asaf">
      <p className="font-['open_sans:regular',sans-serif] leading-[16px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#bdc1c9] text-[12px] text-nowrap whitespace-pre">05:00-12:00</p>
    </div>
  );
}

function Body9() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="body">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-between pb-[4px] pl-[6px] pr-[3px] pt-0 relative size-full">
          <Top10 />
          <WeeklyDutyInfoAsaf9 />
        </div>
      </div>
    </div>
  );
}

function Rail9() {
  return (
    <div className="bg-[#464b59] h-[3px] overflow-clip relative shrink-0 w-full" data-name="rail">
      <div className="absolute bottom-0 left-0 right-[62.07%] top-0" data-name="indicator">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(173, 177, 186, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 3">
            <path d="M0 0H44V3H0V0Z" fill="var(--fill-0, #ADB1BA)" id="indicator" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function WeeklyDutyCellAsaf9() {
  return (
    <div className="bg-[#282e36] h-[46px] relative rounded-[3px] shrink-0 w-[116px]" data-name=".weekly duty cell - Asaf">
      <div className="box-border content-stretch flex flex-col h-[46px] items-start justify-between overflow-clip pb-px pt-[3px] px-0 relative rounded-[inherit] w-[116px]">
        <Body9 />
        <Rail9 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#464b59] border-solid inset-0 pointer-events-none rounded-[3px]" />
    </div>
  );
}

function Frame18() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="frame">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[2px] h-[16px] items-center px-[2px] py-0 w-full" />
      </div>
    </div>
  );
}

function DayIconsAsaf13() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[16px] items-start relative shrink-0 w-[116px]" data-name="day icons - Asaf">
      <div className="absolute inset-0 rounded-[4px]" />
      <Frame18 />
    </div>
  );
}

function DayAsaf13() {
  return (
    <div className="relative rounded-[4px] self-stretch shrink-0" data-name="day - Asaf">
      <div className="box-border content-stretch flex flex-col gap-[4px] h-full items-center overflow-clip pb-[9px] pt-px px-[14px] relative rounded-[inherit]">
        <WeeklyDutyCellAsaf9 />
        <DayIconsAsaf13 />
      </div>
      <div aria-hidden="true" className="absolute border-[#464b59] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Cells3() {
  return (
    <div className="content-stretch flex items-start relative rounded-[2px] shrink-0 w-[1070px]" data-name="cells">
      <DayAsaf11 />
      <DayAsaf11 />
      <DayAsaf11 />
      <DayAsaf11 />
      <DayAsaf11 />
      <DayAsaf12 />
      <DayAsaf11 />
      <DayAsaf11 />
      <DayAsaf11 />
      <DayAsaf11 />
      <DayAsaf13 />
    </div>
  );
}

function WeeklyRow3() {
  return (
    <div className="bg-[#1a1e24] content-stretch flex items-start overflow-clip relative shrink-0 w-full" data-name="weekly row">
      <DriverCellAsaf3 />
      <Stats4 />
      <Cells3 />
    </div>
  );
}

function UserAvatar4() {
  return (
    <div className="bg-[#06887c] relative rounded-[9999px] shrink-0 size-[30px]" data-name="User Avatar">
      <div className="absolute flex flex-col font-['open_sans:bold',sans-serif] h-[29px] justify-center leading-[0] left-[15px] not-italic text-[14px] text-center text-white top-[14.5px] tracking-[-0.5px] translate-x-[-50%] translate-y-[-50%] w-[30px]">
        <p className="leading-[19px]">AB</p>
      </div>
    </div>
  );
}

function Bottom5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center leading-[0] relative shrink-0 text-[11px] text-nowrap w-full" data-name="bottom">
      <div className="flex flex-col font-['open_sans:regular',sans-serif] justify-center not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#f2f3f5]">
        <p className="leading-[16px] overflow-ellipsis overflow-hidden text-[11px] text-nowrap whitespace-pre">Early</p>
      </div>
      <div className="basis-0 flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold grow justify-center min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#bdc1c9] tracking-[0.4px] uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="[white-space-collapse:collapse] leading-[normal] overflow-ellipsis overflow-hidden text-[11px] text-nowrap">324099</p>
      </div>
    </div>
  );
}

function Info4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[134px]" data-name="info">
      <p className="[white-space-collapse:collapse] font-['open_sans:bold',sans-serif] leading-[12px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#dfe1e5] text-[12px] text-nowrap tracking-[0.4px] w-full">James Joyce</p>
      <Bottom5 />
    </div>
  );
}

function DriverCellAsaf4() {
  return (
    <div className="bg-[#282e36] box-border content-stretch flex gap-[12px] items-start pb-0 pl-[16px] pr-0 pt-[8px] relative rounded-bl-[4px] rounded-tl-[4px] self-stretch shrink-0 w-[200px]" data-name="Driver cell - Asaf">
      <UserAvatar4 />
      <Info4 />
    </div>
  );
}

function Stats5() {
  return (
    <div className="bg-[#282e36] box-border content-stretch flex gap-[8px] items-start p-[8px] relative self-stretch shrink-0 w-[89px]" data-name="stats">
      <div aria-hidden="true" className="absolute border-[#464b59] border-[0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#dfe1e5] text-[12px] text-nowrap tracking-[1.4px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        4
      </p>
    </div>
  );
}

function Title10() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="title">
      <p className="[white-space-collapse:collapse] basis-0 font-['open_sans:bold',sans-serif] grow leading-[12px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#bdc1c9] text-[12px] text-nowrap tracking-[0.4px]">1025 (EA)</p>
    </div>
  );
}

function Top11() {
  return (
    <div className="content-stretch flex gap-[4px] h-[20px] items-center relative shrink-0 w-full" data-name="top">
      <Title10 />
    </div>
  );
}

function WeeklyDutyInfoAsaf10() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-center relative shrink-0" data-name=".weekly duty info - Asaf">
      <p className="font-['open_sans:regular',sans-serif] leading-[16px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#bdc1c9] text-[12px] text-nowrap whitespace-pre">05:00-12:00</p>
    </div>
  );
}

function Body10() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="body">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-between pb-[4px] pl-[6px] pr-[3px] pt-0 relative size-full">
          <Top11 />
          <WeeklyDutyInfoAsaf10 />
        </div>
      </div>
    </div>
  );
}

function Rail10() {
  return (
    <div className="bg-[#464b59] h-[3px] overflow-clip relative shrink-0 w-full" data-name="rail">
      <div className="absolute bottom-0 left-0 right-[62.07%] top-0" data-name="indicator">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(173, 177, 186, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 3">
            <path d="M0 0H44V3H0V0Z" fill="var(--fill-0, #ADB1BA)" id="indicator" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function WeeklyDutyCellAsaf10() {
  return (
    <div className="bg-[#282e36] h-[46px] relative rounded-[3px] shrink-0 w-[116px]" data-name=".weekly duty cell - Asaf">
      <div className="box-border content-stretch flex flex-col h-[46px] items-start justify-between overflow-clip pb-px pt-[3px] px-0 relative rounded-[inherit] w-[116px]">
        <Body10 />
        <Rail10 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#464b59] border-solid inset-0 pointer-events-none rounded-[3px]" />
    </div>
  );
}

function Frame19() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="frame">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[2px] h-[16px] items-center px-[2px] py-0 w-full" />
      </div>
    </div>
  );
}

function DayIconsAsaf14() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[16px] items-start relative shrink-0 w-[116px]" data-name="day icons - Asaf">
      <div className="absolute inset-0 rounded-[4px]" />
      <Frame19 />
    </div>
  );
}

function DayAsaf14() {
  return (
    <div className="relative shrink-0" data-name="day - Asaf">
      <div className="box-border content-stretch flex flex-col gap-[4px] items-center overflow-clip pb-[9px] pt-px px-[14px] relative rounded-[inherit]">
        <WeeklyDutyCellAsaf10 />
        <DayIconsAsaf14 />
      </div>
      <div aria-hidden="true" className="absolute border-[#464b59] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Title11() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="title">
      <p className="[white-space-collapse:collapse] basis-0 font-['open_sans:bold',sans-serif] grow leading-[12px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#bdc1c9] text-[12px] text-nowrap tracking-[0.4px]">1025 (EA)</p>
    </div>
  );
}

function Top12() {
  return (
    <div className="content-stretch flex gap-[4px] h-[20px] items-center relative shrink-0 w-full" data-name="top">
      <Title11 />
    </div>
  );
}

function WeeklyDutyInfoAsaf11() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-center relative shrink-0" data-name=".weekly duty info - Asaf">
      <p className="font-['open_sans:regular',sans-serif] leading-[16px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#bdc1c9] text-[12px] text-nowrap whitespace-pre">05:00-12:00</p>
    </div>
  );
}

function Body11() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="body">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-between pb-[4px] pl-[6px] pr-[3px] pt-0 relative size-full">
          <Top12 />
          <WeeklyDutyInfoAsaf11 />
        </div>
      </div>
    </div>
  );
}

function Rail11() {
  return (
    <div className="bg-[#464b59] h-[3px] overflow-clip relative shrink-0 w-full" data-name="rail">
      <div className="absolute bottom-0 left-0 right-[62.07%] top-0" data-name="indicator">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(173, 177, 186, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 3">
            <path d="M0 0H44V3H0V0Z" fill="var(--fill-0, #ADB1BA)" id="indicator" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function WeeklyDutyCellAsaf11() {
  return (
    <div className="bg-[#282e36] h-[46px] relative rounded-[3px] shrink-0 w-[116px]" data-name=".weekly duty cell - Asaf">
      <div className="box-border content-stretch flex flex-col h-[46px] items-start justify-between overflow-clip pb-px pt-[3px] px-0 relative rounded-[inherit] w-[116px]">
        <Body11 />
        <Rail11 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#464b59] border-solid inset-0 pointer-events-none rounded-[3px]" />
    </div>
  );
}

function Frame20() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="frame">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[2px] h-[16px] items-center px-[2px] py-0 w-full" />
      </div>
    </div>
  );
}

function DayIconsAsaf15() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[16px] items-start relative shrink-0 w-[116px]" data-name="day icons - Asaf">
      <div className="absolute inset-0 rounded-[4px]" />
      <Frame20 />
    </div>
  );
}

function DayAsaf15() {
  return (
    <div className="relative rounded-[4px] shrink-0" data-name="day - Asaf">
      <div className="box-border content-stretch flex flex-col gap-[4px] items-center overflow-clip pb-[9px] pt-px px-[14px] relative rounded-[inherit]">
        <WeeklyDutyCellAsaf11 />
        <DayIconsAsaf15 />
      </div>
      <div aria-hidden="true" className="absolute border-[#464b59] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Cells4() {
  return (
    <div className="content-stretch flex items-start relative rounded-[2px] shrink-0 w-[1070px]" data-name="cells">
      {[...Array(10).keys()].map((_, i) => (
        <DayAsaf14 key={i} />
      ))}
      <DayAsaf15 />
    </div>
  );
}

function WeeklyRow4() {
  return (
    <div className="bg-[#1a1e24] content-stretch flex items-start overflow-clip relative shrink-0 w-full" data-name="weekly row">
      <DriverCellAsaf4 />
      <Stats5 />
      <Cells4 />
    </div>
  );
}

function Grid() {
  return (
    <div className="bg-[#282e36] content-stretch flex flex-col items-start relative rounded-[4px] shrink-0 w-full" data-name="grid">
      <WeeklyRow />
      <WeeklyRow1 />
      <WeeklyRow2 />
      <WeeklyRow3 />
      {[...Array(2).keys()].map((_, i) => (
        <WeeklyRow4 key={i} />
      ))}
    </div>
  );
}

function InputBorder2() {
  return (
    <div className="absolute inset-0 rounded-[4px]" data-name=".input border">
      <div aria-hidden="true" className="absolute border border-[#464b59] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Wrap9() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="wrap">
      <div className="flex flex-col font-['Open_Sans:Italic',sans-serif] font-normal italic justify-center leading-[0] overflow-ellipsis overflow-hidden relative shrink-0 text-[#bdc1c9] text-[12px] text-nowrap tracking-[1px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] overflow-ellipsis overflow-hidden whitespace-pre">Search stack</p>
      </div>
    </div>
  );
}

function TextInputSingleLine1() {
  return (
    <div className="bg-[#303745] h-[30px] relative rounded-[4px] shrink-0 w-full" data-name="Text input - Single line">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[2px] h-[30px] items-center pl-[8px] pr-[6px] py-[2px] relative w-full">
          <InputBorder2 />
          <Wrap9 />
        </div>
      </div>
    </div>
  );
}

function IconMFilter1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="icon M - filter">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="icon M - filter">
          <path d={svgPaths.p1692f100} fill="var(--fill-0, #DFE1E5)" id="shape" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="h-[30px] relative rounded-[4px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#464b59] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[30px] items-center justify-center pl-[12px] pr-[16px] py-[2px] relative w-full">
          <IconMFilter1 />
          <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#dfe1e5] text-[12px] text-center text-nowrap tracking-[1.6px] uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[16px] whitespace-pre" dir="auto">
              FILTER STACK
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] items-start px-[8px] py-[12px] relative rounded-tl-[4px] self-stretch shrink-0 w-[290px]" data-name="frame">
      <TextInputSingleLine1 />
      <Button6 />
    </div>
  );
}

function Title12() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="title">
      <p className="[white-space-collapse:collapse] basis-0 font-['open_sans:bold',sans-serif] grow leading-[12px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#bdc1c9] text-[12px] text-nowrap tracking-[0.4px]">1025 (EA)</p>
    </div>
  );
}

function Top13() {
  return (
    <div className="content-stretch flex gap-[4px] h-[20px] items-center relative shrink-0 w-full" data-name="top">
      <Title12 />
    </div>
  );
}

function WeeklyDutyInfoAsaf12() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-center relative shrink-0" data-name=".weekly duty info - Asaf">
      <p className="font-['open_sans:regular',sans-serif] leading-[16px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#bdc1c9] text-[12px] text-nowrap whitespace-pre">05:00-12:00</p>
    </div>
  );
}

function Body12() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="body">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-between pb-[4px] pl-[6px] pr-[3px] pt-0 relative size-full">
          <Top13 />
          <WeeklyDutyInfoAsaf12 />
        </div>
      </div>
    </div>
  );
}

function Rail12() {
  return (
    <div className="bg-[#464b59] h-[3px] overflow-clip relative shrink-0 w-full" data-name="rail">
      <div className="absolute bottom-0 left-0 right-[62.07%] top-0" data-name="indicator">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(173, 177, 186, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 3">
            <path d="M0 0H44V3H0V0Z" fill="var(--fill-0, #ADB1BA)" id="indicator" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function WeeklyDutyCellAsaf12() {
  return (
    <div className="bg-[#282e36] h-[46px] relative rounded-[3px] shrink-0 w-[116px]" data-name=".weekly duty cell - Asaf">
      <div className="box-border content-stretch flex flex-col h-[46px] items-start justify-between overflow-clip pb-px pt-[3px] px-0 relative rounded-[inherit] w-[116px]">
        <Body12 />
        <Rail12 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#464b59] border-solid inset-0 pointer-events-none rounded-[3px]" />
    </div>
  );
}

function Wrap10() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] items-center justify-center px-[13px] py-[4px] relative shrink-0" data-name="wrap">
      <div aria-hidden="true" className="absolute border-[#464b59] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <WeeklyDutyCellAsaf12 />
    </div>
  );
}

function Row2() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0 w-full" data-name="row">
      {[...Array(9).keys()].map((_, i) => (
        <Wrap10 key={i} />
      ))}
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-tr-[4px] self-stretch shrink-0 w-[1075px]" data-name="frame">
      {[...Array(4).keys()].map((_, i) => (
        <Row2 key={i} />
      ))}
    </div>
  );
}

function IconSArrowFillDown3() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="icon S - arrow fill - down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="icon S - arrow fill - down">
          <path d={svgPaths.p3a2c6e70} fill="var(--fill-0, #DFE1E5)" id="shape" />
        </g>
      </svg>
    </div>
  );
}

function Handle() {
  return (
    <div className="absolute bg-[#282e36] box-border content-stretch flex flex-col gap-[10px] h-[11px] items-center justify-center left-[calc(50%-0.5px)] px-[3px] py-[2px] rounded-tl-[4px] rounded-tr-[4px] top-[-10px] translate-x-[-50%] w-[37px]" data-name="handle">
      <div aria-hidden="true" className="absolute border-[#464b59] border-[1px_1px_0px] border-solid inset-0 pointer-events-none rounded-tl-[4px] rounded-tr-[4px]" />
      <IconSArrowFillDown3 />
    </div>
  );
}

function BottomDrawer() {
  return (
    <div className="absolute bg-[#282e36] bottom-0 content-stretch flex items-start left-0 right-[-16px]" data-name="bottom drawer">
      <div aria-hidden="true" className="absolute border border-[#464b59] border-solid inset-0 pointer-events-none shadow-[0px_-2px_16px_0px_rgba(0,0,0,0.3)]" />
      <Frame21 />
      <Frame22 />
      <Handle />
    </div>
  );
}

function GridWrap() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[4px] shrink-0 w-full" data-name="grid wrap">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <GridHeader />
        <Grid />
        <BottomDrawer />
      </div>
      <div aria-hidden="true" className="absolute border border-[#464b59] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Main() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="main">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[2px] items-start pb-0 pl-[8px] pr-[16px] pt-[16px] relative size-full">
          <WeeklyHeaderAsaf />
          <GridWrap />
        </div>
      </div>
    </div>
  );
}

function Body13() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0 w-full" data-name="body">
      <LeftNav />
      <Main />
    </div>
  );
}

function WeeklyAlocatedAsaf() {
  return (
    <div className="basis-0 bg-[#282e36] content-stretch flex flex-col grow h-full items-start min-h-px min-w-px relative shrink-0" data-name="weekly alocated - Asaf">
      <TopBarAsaf />
      <Body13 />
    </div>
  );
}

function IconSExpand() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="icon S - expand">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="icon S - expand">
          <g id="shape">
            <path d="M3 11H7V13H1V7H3V11Z" fill="var(--fill-0, #DFE1E5)" />
            <path d="M13 7H11V3H7V1H13V7Z" fill="var(--fill-0, #DFE1E5)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-[20px] items-center justify-center p-[3px] relative rounded-[4px] shrink-0" data-name="Button">
      <IconSExpand />
    </div>
  );
}

function IconSTimer() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="icon S - timer">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="icon S - timer">
          <g id="shape">
            <path d="M9 0H5V1H9V0Z" fill="var(--fill-0, #DFE1E5)" />
            <path d="M8 5V9H6V5H8Z" fill="var(--fill-0, #DFE1E5)" />
            <path clipRule="evenodd" d={svgPaths.p29273d00} fill="var(--fill-0, #DFE1E5)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button8() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-[20px] items-center justify-center p-[3px] relative rounded-[4px] shrink-0" data-name="Button">
      <IconSTimer />
    </div>
  );
}

function IconSWriteNew() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="icon S - write new">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="icon S - write new">
          <g id="shape">
            <path d={svgPaths.p14918f80} fill="var(--fill-0, #DFE1E5)" />
            <path d={svgPaths.p388c9580} fill="var(--fill-0, #DFE1E5)" />
            <path d={svgPaths.p30284200} fill="var(--fill-0, #DFE1E5)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button9() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-[20px] items-center justify-center p-[3px] relative rounded-[4px] shrink-0" data-name="Button">
      <IconSWriteNew />
    </div>
  );
}

function Left3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="left">
      <Button7 />
      <Button8 />
      <Button9 />
    </div>
  );
}

function PillStatusSmall() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[18px] items-center justify-center pb-[2px] pt-px px-[6px] relative rounded-[4px] shrink-0" data-name="Pill Status - Small">
      <div aria-hidden="true" className="absolute border border-[#adb1ba] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col font-['open_sans:bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#adb1ba] text-[11px] text-center text-nowrap tracking-[0.2px] uppercase">
        <p className="leading-[15px] whitespace-pre">Beta</p>
      </div>
    </div>
  );
}

function IconSClose() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="icon S - close">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="icon S - close">
          <path d={svgPaths.p3f4ee900} fill="var(--fill-0, #DFE1E5)" id="shape" />
        </g>
      </svg>
    </div>
  );
}

function Button10() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-[20px] items-center justify-center p-[3px] relative rounded-[4px] shrink-0" data-name="Button">
      <IconSClose />
    </div>
  );
}

function Right2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="right">
      <PillStatusSmall />
      <Button10 />
    </div>
  );
}

function HeaderV() {
  return (
    <div className="bg-[#282e36] h-[40px] relative shrink-0 w-full z-[3]" data-name="header v02">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[40px] items-center justify-between p-[8px] relative w-full">
          <Left3 />
          <Right2 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#464b59] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function IconSBus() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="icon S - Bus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="icon S - Bus">
          <path clipRule="evenodd" d={svgPaths.p1341df00} fill="var(--fill-0, #DFE1E5)" fillRule="evenodd" id="shape" />
        </g>
      </svg>
    </div>
  );
}

function IconWrap() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[16px] items-center justify-center pl-0 pr-[8px] py-0 relative shrink-0" data-name="icon wrap">
      <IconSBus />
    </div>
  );
}

function TextWrap() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start leading-[16px] min-h-px min-w-px relative shrink-0 text-[14px]" data-name="text wrap">
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[#dfe1e5] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        How to add a deadhead catalog?
      </p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#bdc1c9] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Learn to import Excel file through Deadhead Catalog menu
      </p>
    </div>
  );
}

function OptionV2() {
  return (
    <div className="bg-[#303745] relative rounded-[8px] shrink-0 w-full" data-name="option v02">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-start p-[16px] relative w-full">
          <IconWrap />
          <TextWrap />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#464b59] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function IconSBolt() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="icon S - Bolt">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="icon S - Bolt">
          <path d="M7 8H3L8 0L7 6H11L6 14L7 8Z" fill="var(--fill-0, #DFE1E5)" id="shape" />
        </g>
      </svg>
    </div>
  );
}

function IconWrap1() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[16px] items-center justify-center pl-0 pr-[8px] py-0 relative shrink-0" data-name="icon wrap">
      <IconSBolt />
    </div>
  );
}

function TextWrap1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start leading-[16px] min-h-px min-w-px relative shrink-0 text-[14px]" data-name="text wrap">
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[#dfe1e5] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Intro to optimizations
      </p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#bdc1c9] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Automatically improve schedules to meet defined goals
      </p>
    </div>
  );
}

function OptionV() {
  return (
    <div className="bg-[#303745] relative rounded-[8px] shrink-0 w-full" data-name="option v02">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-start p-[16px] relative w-full">
          <IconWrap1 />
          <TextWrap1 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#464b59] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function IconSDownload() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="icon S - download">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="icon S - download">
          <g id="shape">
            <path d={svgPaths.p3cc82600} fill="var(--fill-0, #DFE1E5)" />
            <path d={svgPaths.pa02e900} fill="var(--fill-0, #DFE1E5)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconWrap2() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[16px] items-center justify-center pl-0 pr-[8px] py-0 relative shrink-0" data-name="icon wrap">
      <IconSDownload />
    </div>
  );
}

function TextWrap2() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start leading-[16px] min-h-px min-w-px relative shrink-0 text-[14px]" data-name="text wrap">
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[#dfe1e5] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Export reports and protocols
      </p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#bdc1c9] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        How to Download schedules and data for external use
      </p>
    </div>
  );
}

function OptionV1() {
  return (
    <div className="bg-[#303745] relative rounded-[8px] shrink-0 w-full" data-name="option v02">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-start p-[16px] relative w-full">
          <IconWrap2 />
          <TextWrap2 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#464b59] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full" data-name="content">
      <OptionV2 />
      <OptionV />
      <OptionV1 />
    </div>
  );
}

function ChatBubleBotV() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[48px] grow items-center justify-end min-h-px min-w-px overflow-clip relative shrink-0 w-full" data-name="chat buble - bot v02">
      <p className="bg-clip-text font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[32px] relative shrink-0 text-[24px] text-center tracking-[-0.48px] w-full" style={{ WebkitTextFillColor: "transparent", fontVariationSettings: "'wdth' 100", backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 360 32\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(-20.934 -1.7 0.6479 -15.206 282.13 25)\\\'><stop stop-color=\\\'rgba(116,104,255,1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(105,155,252,1)\\\' offset=\\\'0.21154\\\'/><stop stop-color=\\\'rgba(94,207,248,1)\\\' offset=\\\'0.42308\\\'/><stop stop-color=\\\'rgba(62,168,255,1)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')" }}>
        What would you like to know?
      </p>
      <Content />
    </div>
  );
}

function Body14() {
  return (
    <div className="basis-0 grow max-w-[800px] min-h-px min-w-px relative shrink-0 w-full z-[2]" data-name="body">
      <div className="flex flex-col items-center justify-end max-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-center justify-end max-w-inherit px-[16px] py-0 relative size-full">
          <ChatBubleBotV />
        </div>
      </div>
    </div>
  );
}

function IconMSend1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="icon M - Send">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="icon M - Send">
          <path d={svgPaths.p16f19880} fill="var(--fill-0, #808080)" id="shape" />
        </g>
      </svg>
    </div>
  );
}

function Button11() {
  return (
    <div className="bg-[#35393f] box-border content-stretch flex gap-[4px] h-[36px] items-center justify-center px-[9px] py-[3px] relative rounded-[36px] shrink-0" data-name="Button">
      <IconMSend1 />
    </div>
  );
}

function ActionsArea() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-full" data-name="actions area">
      <Button11 />
    </div>
  );
}

function ChatInputV() {
  return (
    <div className="bg-[#22272e] relative rounded-[16px] shrink-0 w-full" data-name="chat input v02">
      <div className="flex flex-col items-end justify-end overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-end justify-end p-[16px] relative w-full">
          <div className="flex flex-col font-['Open_Sans:Italic',sans-serif] font-normal italic justify-center leading-[0] relative shrink-0 text-[#bdc1c9] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[24px]">Ask anything</p>
          </div>
          <ActionsArea />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#464b59] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function TextAreaIndicator() {
  return (
    <div className="relative size-[12px]" data-name=".text area indicator">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id=".text area indicator">
          <g id="text area indicator">
            <path clipRule="evenodd" d={svgPaths.pcdb5f00} fill="var(--fill-0, #BDC1C9)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p21ca8b80} fill="var(--fill-0, #BDC1C9)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function FooterV() {
  return (
    <div className="max-w-[800px] relative shrink-0 w-full z-[1]" data-name="footer v02">
      <div className="flex flex-col items-center justify-end max-w-inherit overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-center justify-end max-w-inherit p-[16px] relative w-full">
          <ChatInputV />
          <div className="flex flex-col font-['open_sans:regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#bdc1c9] text-[12px] text-center w-[min-content]">
            <p className="leading-[16px]">Optibus assistant is powered by AI, so your review is essential to ensure accuracy</p>
          </div>
          <div className="absolute bottom-[8px] flex items-center justify-center left-[8px] size-[12px]">
            <div className="flex-none rotate-[180deg] scale-y-[-100%]">
              <TextAreaIndicator />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Wrap11() {
  return (
    <div className="basis-0 bg-[#282e36] content-stretch flex flex-col grow isolate items-center justify-end min-h-px min-w-px overflow-clip relative shrink-0 w-full z-[1]" data-name="wrap">
      <HeaderV />
      <Body14 />
      <FooterV />
    </div>
  );
}

function ChatAreaV() {
  return (
    <div className="absolute bg-[#282e36] bottom-[16px] h-[804px] min-w-[360px] right-[16px] rounded-[8px] w-[400px]" data-name="chat area v02">
      <div className="box-border content-stretch flex flex-col h-[804px] isolate items-center justify-end min-w-inherit overflow-clip p-[4px] relative rounded-[inherit] w-[400px]">
        <Wrap11 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#464b59] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_16px_30px_0px_rgba(0,0,0,0.4),0px_24px_104px_0px_rgba(0,0,0,0.4)]" />
    </div>
  );
}

export default function Flow1PanelAdjustments() {
  return (
    <div className="content-stretch flex items-center justify-between relative size-full" data-name="flow 1 - panel adjustments">
      <WeeklyAlocatedAsaf />
      <ChatAreaV />
    </div>
  );
}