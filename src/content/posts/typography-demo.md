---
title: 示例：排版测试
description: 用来检查标题、代码、公式、旁注和分隔线的样式，不会出现在正式站点上。
date: 2026-11-22
tags: [示例]
draft: true
---

这是一篇示例文章，只在本地开发时可见。它把常用的排版元素都放了一遍，改样式的时候可以拿它对照。正文用系统黑体，标题用宋体。

## 二级标题

<aside>这是一条旁注，写在它要挨着的那一段前面。屏幕够宽时它会排到这一段的右边，窄屏时留在正文里。</aside>

段落里可以有 `行内代码`、**加粗**和[链接](https://example.com)。下面是一个列表：

- 第一项
- 第二项，带一点 English 和数字 123
- 第三项

### 三级标题

> 引用块用来放别人说的话，或者需要单独强调的一句话。

## 代码

```python
import torch

def flow_step(x: torch.Tensor, v: torch.Tensor, dt: float = 0.01) -> torch.Tensor:
    """沿着速度场走一小步。"""
    return x + v * dt  # 欧拉法
```

```bash
qsub -l select=1:ngpus=1 -l walltime=02:00:00 run.pbs
```

## 公式

行内公式用一对 `$` 包起来，比如 $E = mc^2$，或者扩散模型的加噪一步：$q(x_t \mid x_{t-1}) = \mathcal{N}\big(x_t;\ \sqrt{1-\beta_t}\,x_{t-1},\ \beta_t \mathbf{I}\big)$。

单独成行的公式前后各写一行 `$$`：

$$
\mathcal{L}(\theta) = \mathbb{E}_{t,\,x_0,\,\epsilon}\Big[\big\lVert \epsilon - \epsilon_\theta\big(\sqrt{\bar\alpha_t}\,x_0 + \sqrt{1-\bar\alpha_t}\,\epsilon,\ t\big) \big\rVert^2\Big]
$$

多行对齐用 `aligned`：

$$
\begin{aligned}
\nabla \cdot \mathbf{u} &= 0 \\
\partial_t \mathbf{u} + (\mathbf{u} \cdot \nabla)\,\mathbf{u} &= -\nabla p + \nu \Delta \mathbf{u}
\end{aligned}
$$

正文里要写美元符号时，在前面加反斜杠：\$20。

---

## 表格

| 模型 | 参数量 | 备注 |
| --- | --- | --- |
| A | 1.2 B | 基线 |
| B | 3.4 B | 更慢，效果更好 |

上面那行如尼文是分隔线：在 Markdown 里写三个短横线就会出现。
