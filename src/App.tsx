import React from 'react';
import { Wand2, Settings, Clock, Eraser } from 'lucide-react';
import useTextPipe from "./hooks/useTextPipe";

function App() {
  const [text, setText] = React.useState("");
  const [speed, setSpeed] = React.useState(10);
  const [maxDelay, setMaxDelay] = React.useState(2);
  const pipedText = useTextPipe(text, { speed, maxDelay });

  const addText = () => {
    const quotes = [
      "生活中最美的事物往往是那些最简单的时刻，就像清晨的第一缕阳光，或是夜晚星空下的温柔私语。",
      "在漫长的人生旅途中，我们会遇到很多人，但真正能够影响我们生命的，往往是那些让我们学会成长的人。",
      "岁月静好，现世安稳。这八个字说来简单，但要真正做到，需要我们在平凡的日子里，不断地积累点滴的努力。",
      "有时候，放慢脚步不是停滞，而是为了让心灵跟上脚步的节奏。在快节奏的现代生活中，我们都需要学会偶尔停下来，感受生活的美好。",
      "世界上最远的距离，不是生与死的距离，而是我站在你面前，你却不知道我爱你。这种距离，是心与心之间的距离。",
      "人生就像一本书，有些章节让人开怀大笑，有些章节让人潸然泪下，但每一页都值得细细品味，因为这就是属于我们自己的故事。",
      "在追求梦想的道路上，我们可能会遇到很多困难和挫折，但正是这些经历，让我们变得更加坚强，也让最后的成功变得更加珍贵。",
      "时光荏苒，岁月如梭。回首往事，那些曾经觉得痛苦难熬的日子，现在想来却都成了珍贵的回忆，教会了我们成长和感恩。",
      "生命中有太多的美好值得我们去发现和珍惜，就像春天的花开，秋天的落叶，冬天的第一场雪，这些都是大自然赐予我们的礼物。",
      "每个人的生命中都会有不完美，就像月亮有阴晴圆缺，但正是这种不完美，才造就了生命的独特和美丽。"
    ];
    setText(prev => prev + quotes[Math.floor(Math.random() * quotes.length)]);
  };

  const clearText = () => {
    setText("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 p-4">
      <div className="container mx-auto">
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-indigo-600">
              文字流动演示
            </h1>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Settings size={20} className="text-gray-500" />
                <input
                  type="range"
                  min="1"
                  max="20"
                  value={speed}
                  onChange={(e) => setSpeed(Number(e.target.value))}
                  className="w-24"
                />
                <span className="text-sm text-gray-600 min-w-16">
                  {speed} 字/秒
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={20} className="text-gray-500" />
                <input
                  type="range"
                  min="1"
                  max="10"
                  step="0.5"
                  value={maxDelay}
                  onChange={(e) => setMaxDelay(Number(e.target.value))}
                  className="w-24"
                />
                <span className="text-sm text-gray-600 min-w-16">
                  {maxDelay}秒上限
                </span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6 mb-8">
            {/* Original Text */}
            <div className="min-h-32 p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h2 className="text-lg font-semibold text-gray-700 mb-3">原始文本</h2>
              <p className="text-lg text-gray-700 leading-relaxed font-medium">
                {text}
              </p>
            </div>

            {/* Piped Text */}
            <div className="min-h-32 p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h2 className="text-lg font-semibold text-gray-700 mb-3">流动效果</h2>
              <p className="text-lg text-gray-700 leading-relaxed font-medium">
                {pipedText}
                <span className="animate-pulse">|</span>
              </p>
            </div>
          </div>

          <div className="flex justify-center gap-4">
            <button
              onClick={addText}
              className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              <Wand2 size={20} />
              <span>添加文字</span>
            </button>
            <button
              onClick={clearText}
              className="flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              <Eraser size={20} />
              <span>清除文字</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;