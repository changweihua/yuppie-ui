// vitest.config.ts
import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    plugins: [
        vue(),
    ],
    test: {
        // 模拟dom环境
        environment: "happy-dom",
        coverage: {
            // 覆盖率提供者
            provider: "istanbul",
            reporter: ["text", "json", "html"],
            // 设置覆盖文件夹
            reportsDirectory: "./coverage",
            thresholds: {
                // 检查每个文件的阈值
                perFile: true,
                // 设置代码覆盖率阈值
                lines: 75,
                functions: 75,
                branches: 75,
                statements: 75,
            }
        },
        open: true,
        include: ["./packages/**/*.{test,spec}.ts"]
    }
})
