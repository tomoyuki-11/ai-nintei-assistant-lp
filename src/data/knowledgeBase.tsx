import type { ReactNode } from "react";

export interface KnowledgeBaseItem {
  id: string;
  question: string;
  body: ReactNode;
}

export const KNOWLEDGE_BASE_ITEMS: KnowledgeBaseItem[] = [
  {
    id: "kb1",
    question: "要介護認定調査の特記事項とは？",
    body: (
      <>
        <p>
          要介護認定調査の「特記事項」は、調査票（基本調査）の選択肢だけでは伝わりにくい本人の状態・生活実態・背景を、文章で補足する記述欄です。認定審査会や一次判定（コンピュータ判定）に対して、「なぜその選択になったか」「実態はどうか」を説明する役割があります。
        </p>
        <ul className="list-disc list-inside space-y-2 mt-3">
          <li>
            <strong>書く目的：</strong>
            第三者が誤解なく把握できるようにする／困難さ（安全面・介助量・見守り量・頻度）を具体化する／一時的か継続的かを示す
          </li>
          <li>
            <strong>書く内容の典型：</strong>
            できる・できないの境界／介助の中身（声かけ、準備、誘導、見守り、直接介助）／リスク（転倒、誤嚥など）／生活環境（独居、同居者の支援可能性等）
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "kb2",
    question: "特記事項の作成で認定調査員が抱えやすい課題",
    body: (
      <>
        <p>よくある課題は「情報はあるのに、審査に伝わる形に落とせない」ことです。</p>
        <ul className="list-disc list-inside space-y-2 mt-3">
          <li>
            <strong>時間が足りない：</strong>訪問→記録→特記までを短時間で回す必要がある
          </li>
          <li>
            <strong>何を書けば十分か曖昧：</strong>「書きすぎ」と「書かなさすぎ」の線引きが難しい
          </li>
          <li>
            <strong>表現のブレ：</strong>調査員ごとに言い回しや粒度が違い、審査側の読み取り負担が増える
          </li>
          <li>
            <strong>主観と客観の混在：</strong>「しっかりしている」「理解が乏しい」など根拠が薄い表現になりがち
          </li>
          <li>
            <strong>家族申告と観察結果の差：</strong>
            「できると言うが実際はできない」「当日のコンディション」等の整理が難しい
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "kb3",
    question: "特記事項を作成するときに重要なポイント",
    body: (
      <>
        <p>伝わる特記事項のコツは、「状況→行動→介助の頻度」の順で具体化することです。</p>
        <ul className="list-disc list-inside space-y-2 mt-3">
          <li>
            <strong>事実（観察・具体例）中心にする</strong>
            <span className="block mt-1 text-gray-600">
              例：<span className="text-red-500 font-medium">NG</span>「ふらつきがある」／
              <span className="text-green-600 font-medium">OK</span>
              「立ち上がり時に身体が前方へ傾き、支えがないとよろける場面あり」
            </span>
          </li>
          <li>
            <strong>条件付きの可否を明確にする：</strong>「手すりがあれば可」「声かけがあれば可」など
          </li>
          <li>
            <strong>介助の「内容」と「量」を分ける：</strong>
            内容：見守り／声かけ／誘導／一部介助／全介助、量：毎回／週数回 等
          </li>
          <li>
            <strong>一時的要因は切り分けて明記する：</strong>入院、発熱、薬変更、痛み増悪など
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "kb4",
    question: "AI認定調査アシスタントが解決できること",
    body: (
      <>
        <p>
          AIが得意なのは、散らばった情報の整理と、文章の標準化・叩き台作成です。判断の代替ではなく、作成負担を減らす目的で使います。
        </p>
        <ul className="list-disc list-inside space-y-2 mt-3">
          <li>
            <strong>要点の抽出：</strong>音声録音から特記事項の要点を抽出（状況、介助内容、頻度、リスク等）
          </li>
          <li>
            <strong>文章のテンプレ化：</strong>「状況→介助→頻度→結果」の型に整え、粒度を統一
          </li>
          <li>
            <strong>言い回しの客観化：</strong>主観表現を避け、観察事実ベースに言い換え
          </li>
          <li>
            <strong>録音の自由度：</strong>
            本人・家族の同意を得た上で録音すれば、項目順に質問する必要はなく、自然な会話から自動で整理します
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "kb5",
    question: "AIが作成した特記事項を調査員が確認する理由",
    body: (
      <>
        <p>
          特記事項は文章の上手さより、内容の正確性・適切性が重要なため、調査員の確認が不可欠です。
        </p>
        <ul className="list-disc list-inside space-y-2 mt-3">
          <li>
            <strong>出力の不完全さ：</strong>抜け・主観・当日の例外など、情報が不完全・曖昧なことがある
          </li>
          <li>
            <strong>断定リスク：</strong>AIは「それらしくまとめる」ことができてしまうため、断定が強くなる場合がある
          </li>
          <li>
            <strong>目視情報の追記が必要：</strong>
            音声だけでは拾えない表情・動作・住環境などは、調査員が確認・追記する
          </li>
          <li>
            <strong>倫理・配慮：</strong>本人・家族への敬意やプライバシーへの配慮が必要
          </li>
          <li>
            <strong>責任の所在：</strong>
            記録の最終責任は調査員・組織にあり、AI出力をそのまま提出することは推奨しません
          </li>
        </ul>
      </>
    ),
  },
];
