import { test, expect } from '@playwright/test';

// Before each test, navigate to the target website
test.beforeEach(async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
});



 // Positive Function Tests (Pos_Fun)
   test('Pos_Fun_0001 - Future Tense', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('heta api polonnaruva yanavaa');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('හෙට අපි පොලොන්නරුව යනවා', { timeout: 15000 });
});

test('Pos_Fun_02: Compound Sentence', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('mama baeQQkuvata yanavaa iitapasse salli dhaanavaa');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('මම බැංකුවට යනවා ඊටපස්සෙ සල්ලි දානවා', { timeout: 15000 });
});

test('Pos_Fun_03: Complex Sentence', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('asaniipa unath viBhaagaya liyanna yanna epaeyi');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('අසනීප උනත් විභාගය ලියන්න යන්න එපැයි', { timeout: 15000 });
});

test('Pos_Fun_04: Interrogative Form', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('Adha api film ekak balanna yamudha?');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('අද අපි film එකක් බලන්න යමුද?', { timeout: 15000 });
});

test('Pos_Fun_05: Imperative Form', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('beheth bonna');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('බෙහෙත් බොන්න', { timeout: 15000 });
});

test('Pos_Fun_06: Simple Sentence 2', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('mama skole yanavaa');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('මම ස්කොලෙ යනවා', { timeout: 15000 });
});

test('Pos_Fun_07: Negative Form', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('mama eyaata kaemathi naehae.');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('මම එයාට කැමති නැහැ.', { timeout: 15000 });
});

test('Pos_Fun_08: Greeting', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('suba upandhinayak');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('සුබ උපන්දිනයක්', { timeout: 15000 });
});

test('Pos_Fun_09: Polite Request', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('mata oyaage vaahanaya tikakata dhenna puluvandha');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('මට ඔයාගෙ වාහනය ටිකකට දෙන්න පුලුවන්ද', { timeout: 15000 });
});

test('Pos_Fun_10: Response Form', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('ehenam mama eeka dhennam');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('එහෙනම් මම ඒක දෙන්නම්', { timeout: 15000 });
});

test('Pos_Fun_11: Polite Phrasing (Apology)', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('samaavenna, mata eeka karanna baeri unaa');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('සමාවෙන්න, මට ඒක කරන්න බැරි උනා', { timeout: 15000 });
});

test('Pos_Fun_12: Informal Slang', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('eeyi ehaapaeththen varen');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('ඒයි එහාපැත්තෙන් වරෙන්', { timeout: 15000 });
});

test('Pos_Fun_13: Day-to-day Expression', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('magee oluva ridhenavaa.');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('මගේ ඔලුව රිදෙනවා.', { timeout: 15000 });
});

test('Pos_Fun_14: Collocation', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('vathura bonna');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('වතුර බොන්න', { timeout: 15000 });
});

test('Pos_Fun_15: Daily Language', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('api adha pansal yanavaa');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('අපි අද පන්සල් යනවා', { timeout: 15000 });
});

test('Pos_Fun_16: Joined Words Variation', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('Apiaevidhinnayanavaa');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('අපිඇවිදින්නයනවා', { timeout: 15000 });
});

test('Pos_Fun_17: Repeated Words', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('goda goda');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('ගොඩ ගොඩ', { timeout: 15000 });
});

test('Pos_Fun_18: Past Tense', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('mama iiye paadam karaa');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('මම ඊයෙ පාඩම් කරා', { timeout: 15000 });
});

test('Pos_Fun_19: Present Tense', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('api dhaen dhuvanavaa');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('අපි දැන් දුවනවා', { timeout: 15000 });
});

test('Pos_Fun_20: Future Tense', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('mama heta viBhaagaya liyanavaa');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('මම හෙට විභාගය ලියනවා', { timeout: 15000 });
});

test('Pos_Fun_21: Negation Pattern', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('mata nidhimatha naee.');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('මට නිදිමත නෑ.', { timeout: 15000 });
});

test('Pos_Fun_22: Singular/Pronoun Variation', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('mama nidhaaganna hadhanne');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('මම නිදාගන්න හදන්නෙ', { timeout: 15000 });
});

test('Pos_Fun_23: Plural Usage', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('oyaala bath kanna');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('ඔයාල බත් කන්න', { timeout: 15000 });
});

test('Pos_Fun_24: Request Form', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('karuNaakara mata Nayak dhenna puluvandha');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('කරුණාකර මට ණයක් දෙන්න පුලුවන්ද', { timeout: 15000 });
});

test('Pos_Fun_25: Mixed Singlish + English', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('magee LinkedIn ekee profile photo eka update karaganna oyaata oyaage WiFi password eka dhenna puluvandha');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('මගේ LinkedIn එකේ profile photo එක update කරගන්න ඔයාට ඔයාගෙ WiFi password එක දෙන්න පුලුවන්ද', { timeout: 15000 });
});

test('Pos_Fun_26: Long Mixed Technical Paragraph', async ({ page }) => {
  const paragraph = "Mama dhaen town Ekata aava eegamanma Bank Ekata yanava card eke PIN eka venas kara ganna.ATM eka laga poolima eekanisaa oyaata mama App eken salli dhaala SMS ekak dhaannam.mama iita passe yanavaa PC ekak balanna.oyaata mama Whatsapp Call ekak gannam. eke thiyena dheeval (RAM,ROM,GPU,CPU) hodhayidha kiyala oyaa poddak balanna.puluvan needha?heta janavaari 1 nisaa api party ekak dhaamu.mama haal 5kg k gennam.1Kg k venne RS 200k vitharayi. oyaa adupaadu SMS ekak dhaala thiyanna mama aran ennam.heta havasa 7PM vage vedhdhi party eka dhaamu.";
  const expected = "මම දැන් town එකට ආව ඒගමන්ම Bank එකට යනව card eke PIN එක වෙනස් කර ගන්න.ATM එක ලග පෝලිම ඒකනිසා ඔයාට මම App එකෙන් සල්ලි දාල SMS එකක් දාන්නම්.මම ඊට පස්සෙ යනවා PC එකක් බලන්න.ඔයාට මම Whatsapp Call එකක් ගන්නම්. eke තියෙන දේවල් (RAM,ROM,GPU,CPU) හොදයිද කියල ඔයා පොඩ්ඩක් බලන්න.පුලුවන් නේද?හෙට ජනවාරි 1 නිසා අපි party එකක් දාමු.මම හාල් 5kg ක් ගෙන්නම්.1Kg ක් වෙන්නෙ RS 200ක් විතරයි. ඔයා අඩුපාඩු SMS එකක් දාල තියන්න මම අරන් එන්නම්.හෙට හවස 7PM වගෙ වෙද්දි party එක දාමු.";
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill(paragraph);
  await expect(page.locator('div.bg-slate-50').first()).toHaveText(expected, { timeout: 15000 });
});

test('Pos_Fun_27: Multiple Spaces', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('mata    theekak bonna    oonee');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('මට තේකක් බොන්න ඕනේ', { timeout: 15000 });
});

test('Pos_Fun_28: Multi-line Input', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('mata dhaen nidhimathayi \nmama nidhaaganna yanavaa');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('මට දැන් නිදිමතයි මම නිදාගන්න යනවා', { timeout: 15000 });
});

test('Pos_Fun_29: Scientific/Technical Long Paragraph', async ({ page }) => {
  const input = "maanava moLaya saha kRUthrima budhDhiya (Artificial Intelligence) athara pavathina sabaDHAthaava piLibaDHA nava vidhYaathmaka pariikShaNa raashiyak mee dhinavala sidhuvemin pavathii. vidhYaaGHAyin visin moLayee pavathina snaayu padhDhathi (Neural Networks) aakRUthigatha kiriima saha eevaayee kriyaakaarithvaya aDhYAyanaya kiriima thuLin, minisaata samaana lesa sithiya haeki parigaNaka padhDhathi nirmaaNaya kiriimata balaaporoththu vee. mema thaakShaNaya 'Neuromorphic Computing' lesa haDHAunvana athara, eyin anaagathayee vaidhYA vidhYaava saha yanthra thaakShaNaya thuLa dhaevaentha parivarthanayak sidhuvanu aethi bava thaakShaNa amaathYAvarayaa saDHAhan kaLeeya.";
  const expected = "මානව මොළය සහ කෘත්‍රිම බුද්ධිය (Artificial Intelligence) අතර පවතින සබඳතාව පිළිබඳ නව විද්‍යාත්මක පරීක්ෂණ රාශියක් මේ දිනවල සිදුවෙමින් පවතී. විද්‍යාඥයින් විසින් මොළයේ පවතින ස්නායු පද්ධති (Neural Networks) ආකෘතිගත කිරීම සහ ඒවායේ ක්‍රියාකාරිත්වය අධ්‍යයනය කිරීම තුළින්, මිනිසාට සමාන ලෙස සිතිය හැකි පරිගණක පද්ධති නිර්මාණය කිරීමට බලාපොරොත්තු වේ. මෙම තාක්ෂණය 'ණෙඋරොමොර්ප්හිc Computing' ලෙස හඳෞන්වන අතර, එයින් අනාගතයේ වෛද්‍ය විද්‍යාව සහ යන්ත්‍ර තාක්ෂණය තුළ දැවැන්ත පරිවර්තනයක් සිදුවනු ඇති බව තාක්ෂණ අමාත්‍යවරයා සඳහන් කළේය.";
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill(input);
  await expect(page.locator('div.bg-slate-50').first()).toHaveText(expected, { timeout: 15000 });
});

test('Pos_Fun_30: Slang/Colloquial', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('appatasiri, mata ASSIGMENT eka submit karanna amathaka unaane.');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('අප්පටසිරි, මට ASSIGMENT එක submit කරන්න අමතක උනානෙ.', { timeout: 15000 });
});

// 4. NEGATIVE FUNCTIONAL TESTS


test('Neg_Fun_0001: Email Transliteration Error', async ({ page }) => {
        const input = 'Oyaage email eka saman123@gmail.com needha';
        const expected = 'ඔයාගෙ email එක saman123@gmail.com නේද';
        await page.getByPlaceholder('Input Your Singlish Text Here.').fill(input);
        await expect(page.locator('div.bg-slate-50').first()).toHaveText(expected);
    });

    test('Neg_Fun_0002: Password Handling Error', async ({ page }) => {
        const input = 'Oyaage phone ekee password eka "sadaruwan345"';
        const expected = 'ඔයාගෙ phone එකේ password එක "sadaruwan345"';
        await page.getByPlaceholder('Input Your Singlish Text Here.').fill(input);
        await expect(page.locator('div.bg-slate-50').first()).toHaveText(expected);
    });

    test('Neg_Fun_0003: URL Handling Error', async ({ page }) => {
        const input = 'oyaata https://www.youtube.com/ me URL eka click karala youtube ekata yanna puluwan.';
        const expected = 'ඔයාට https://www.youtube.com/ මේ URL එක click කරලා youtube එකට යන්න පුළුවන්.';
        await page.getByPlaceholder('Input Your Singlish Text Here.').fill(input);
        await expect(page.locator('div.bg-slate-50').first()).toHaveText(expected);
    });

    test('Neg_Fun_0004: Phonetic w Issue', async ({ page }) => {
        const input = 'api pettaneyata yanawa sellam karanna.';
        const expected = 'අපි පිට්ටනියට යනවා සෙල්ලම් කරන්න.';
        await page.getByPlaceholder('Input Your Singlish Text Here.').fill(input);
        await expect(page.locator('div.bg-slate-50').first()).toHaveText(expected);
    });

    test('Neg_Fun_0005: Vowel Length Ambiguity', async ({ page }) => {
        const input = 'mama kama ekak genawa api eka kamu';
        const expected = 'මම කෑම එකක් ගෙනාවා අපි එක කමු';
        await page.getByPlaceholder('Input Your Singlish Text Here.').fill(input);
        await expect(page.locator('div.bg-slate-50').first()).toHaveText(expected);
    });

    test('Neg_Fun_0006: Phonetic w/v Confusion', async ({ page }) => {
        const input = 'ikmanata oka iwara karala pantiyata enna';
        const expected = 'ඉක්මනට ඕක ඉවර කරලා පන්තියට එන්න';
        await page.getByPlaceholder('Input Your Singlish Text Here.').fill(input);
        await expect(page.locator('div.bg-slate-50').first()).toHaveText(expected);
    });

    test('Neg_Fun_0007: Spacing/Slang Robustness', async ({ page }) => {
        const input = 'eka harim kethei';
        const expected = 'ඒක හරිම කැතයි';
        await page.getByPlaceholder('Input Your Singlish Text Here.').fill(input);
        await expect(page.locator('div.bg-slate-50').first()).toHaveText(expected);
    });

    test('Neg_Fun_0008: English Loanword Breakdown', async ({ page }) => {
        const input = 'mama polece ynw';
        const expected = 'මම police යනවා';
        await page.getByPlaceholder('Input Your Singlish Text Here.').fill(input);
        await expect(page.locator('div.bg-slate-50').first()).toHaveText(expected);
    });

    test('Neg_Fun_0009: Slang Retroflex Consonants', async ({ page }) => {
        const input = 'harima pandethai oya';
        const expected = 'හරිම පණ්ඩිතයි ඔයා';
        await page.getByPlaceholder('Input Your Singlish Text Here.').fill(input);
        await expect(page.locator('div.bg-slate-50').first()).toHaveText(expected);
    });

    test('Neg_Fun_0010: Mixed Language Robustness', async ({ page }) => {
        const input = 'apal juice ekK bomud';
        const expected = 'ඇපල් juice එකක් බොමුද';
        await page.getByPlaceholder('Input Your Singlish Text Here.').fill(input);
        await expect(page.locator('div.bg-slate-50').first()).toHaveText(expected);
    });

// 5. POSITIVE UI TESTS (Pos_UI)
    test('Pos_UI_0001: Real-time Output Update', async ({ page }) => {
        await page.getByPlaceholder('Input Your Singlish Text Here.').type('beheth bonna');
        await expect(page.locator('div.bg-slate-50').first()).toHaveText('බෙහෙත් බොන්න');
    });

// 6. NEGATIVE UI TESTS (Neg_UI)
    test('Neg_UI_0001: Chemical Formulas/Symbol Handling', async ({ page }) => {
        await page.getByPlaceholder('Input Your Singlish Text Here.').fill('H2SO4 + NaOH');
        await expect(page.locator('div.bg-slate-50').first()).toHaveText('H2SO4 + NaOH');
    });